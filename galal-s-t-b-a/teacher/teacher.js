// teacher.js - لوحة تحكم المدرس
import { logoutUser } from "./firebase.js";

document.getElementById("logout").addEventListener("click", logoutUser);

document.getElementById("addSlotForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const slotTime = document.getElementById("slotTime").value;
    alert(`Slot ${slotTime} added successfully.`);
    document.getElementById("addSlotForm").reset();
});
