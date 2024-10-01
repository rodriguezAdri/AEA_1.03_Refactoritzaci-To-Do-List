const addTask = () => {
    const taskInput = document.getElementById("taskInput").value;

    if (taskInput.trim() === "") {
        return;
    }

    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.textContent = taskInput;

    // Añadir botón de eliminar.
    const buttonDelete = document.createElement("button");
    buttonDelete.textContent = "X";
    buttonDelete.setAttribute('aria-label', 'Eliminar tarea');
    buttonDelete.onclick = () => taskList.removeChild(li);

    // Añadir tarea y botón a la lista.
    li.appendChild(buttonDelete);
    taskList.appendChild(li);

    // Limpiar el input después de añadir la tarea.
    document.getElementById("taskInput").value = "";
};
