```javascript
const editDialog = document.getElementById("editDialog");
const editForm = document.getElementById("editForm");

function openEdit(button) {
    const employeeId = button.dataset.id;

    editForm.action = `/edit/${employeeId}`;

    document.getElementById("editName").value = button.dataset.name || "";
    document.getElementById("editPhone").value = button.dataset.phone || "";
    document.getElementById("editEmail").value = button.dataset.email || "";
    document.getElementById("editDepartment").value = button.dataset.department || "";
    document.getElementById("editPosition").value = button.dataset.position || "";
    document.getElementById("editSalary").value = button.dataset.salary || 0;
    document.getElementById("editDate").value = button.dataset.date || "";
    document.getElementById("editStatus").value = button.dataset.status || "Active";

    editDialog.showModal();
}

function closeEdit() {
    editDialog.close();
}

editDialog?.addEventListener("click", (event) => {
    if (event.target === editDialog) {
        closeEdit();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && editDialog?.open) {
        closeEdit();
    }
});
```
