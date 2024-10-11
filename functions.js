// Fonction pour ajouter une tâche
export function addTask(newTask, taskList, deletedTasks) {
  // Créer un élément <li> pour la nouvelle tâche
  let li = document.createElement("li");
  li.textContent = `${newTask.title} - ${newTask.description}`;

  document.getElementById("list").appendChild(li);

  // Créer un bouton "Supprimer" pour chaque tâche
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Supprimer";

  // Créer un bouton "Modifier" pour chaque tâche
  let editButton = document.createElement("button");
  editButton.textContent = "Modifier";

  // Ajouter les boutons au <li>
  li.appendChild(deleteButton);
  li.appendChild(editButton);

  // Ajouter l'événement pour supprimer la tâche
  deleteButton.addEventListener("click", function () {
    deleteTask(newTask, taskList, li, deletedTasks);
  });

  // Ajouter l'événement pour modifier la tâche
  editButton.addEventListener("click", function () {
    editTask(newTask, taskList, li, deleteButton, editButton);
  });

  // Réinitialiser les champs
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
}

// Fonction pour supprimer une tâche
export function deleteTask(task, taskList, listItem, deletedTasks) {
  // Retirer la tâche de l'interface
  listItem.remove();

  // Ajouter la tâche supprimée dans le tableau deletedTasks
  let index = taskList.indexOf(task);
  if (index !== -1) {
    taskList.splice(index, 1);
    deletedTasks.push(task);
  }
}

// La Fonction pour modifier une tâche
export function editTask(task, taskList, listItem, deleteButton, editButton) {
  // Remplir les champs de formulaire avec les valeurs de la tâche à modifier
  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;

  // Remplacer le bouton "Ajouter ma tâche" par un bouton "Enregistrer"
  let saveButton = document.getElementById("tasklist");
  saveButton.textContent = "Enregistrer";

  // Quand l'utilisateur clique sur "Enregistrer"
  saveButton.onclick = function (event) {
    event.preventDefault();

    // On met à jour les valeurs de la tâche
    task.title = document.getElementById("title").value;
    task.description = document.getElementById("description").value;

    // On met à jourl'affichage de la tâche dans la liste
    listItem.textContent = `${task.title} - ${task.description}`;

    // On réinitialise le bouton "Enregistrer" en "Ajouter ma tâche"
    saveButton.textContent = "Ajouter ma tâche";
    saveButton.onclick = null;

    // Remettre les boutons "Supprimer" et "Modifier"
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);

    // On réinitialise les champs
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  };
}
