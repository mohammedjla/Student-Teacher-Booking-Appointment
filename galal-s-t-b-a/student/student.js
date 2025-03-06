// student.js - لوحة تحكم الطالب
import { logoutUser } from "./firebase.js";

document.getElementById("logout").addEventListener("click", logoutUser);

document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const teacherName = document.getElementById("teacherName").value;
    alert(`Searching for ${teacherName}...`);
});
