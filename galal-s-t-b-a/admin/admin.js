// admin.js - لوحة تحكم المشرف
import { logoutUser } from "./firebase.js";

document.getElementById("logout").addEventListener("click", logoutUser);

document.getElementById("addTeacherForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("teacherName").value;
    const email = document.getElementById("teacherEmail").value;

    alert(`Teacher ${name} added successfully.`);
    document.getElementById("addTeacherForm").reset();
});
