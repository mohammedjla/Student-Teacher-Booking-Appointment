// firebase.js - إعداد Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// تسجيل مستخدم جديد
export async function registerUser(name, email, password, role) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", userCredential.user.uid), { name, email, role });
        alert("Registration successful.");
    } catch (error) {
        alert("Error: " + error.message);
    }
}

// تسجيل الدخول
export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
        const userData = userDoc.data();
        if (userData.role === "admin") window.location.href = "admin.html";
        else if (userData.role === "teacher") window.location.href = "teacher.html";
        else window.location.href = "student.html";
    } catch (error) {
        alert("Login error: " + error.message);
    }
}

// تسجيل الخروج
export function logoutUser() {
    signOut(auth).then(() => {
        alert("Logged out.");
        window.location.href = "index.html";
    });
}
