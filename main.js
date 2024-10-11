// objet qui représente une tâche
import { addTask, deleteTask, editTask } from "./functions.js";

let taskList = []; // tableau qui stockera nos tâches
let deletedTasks = []; // tableau qui stockera les tâches supprimées

// récupere nos élèments HTML et on les stocke
let form = document.getElementById("form");
let title = document.getElementById("title");
let description = document.getElementById("description");

// depuis la variable form, je lui attache un événement de type submit (soumission de formulaire)
form.addEventListener("submit", function (event) {
  //bloquer le chargement de la page
  event.preventDefault();
  // je récupère et stock les valeurs de mon champ
  let newTask = {
    title: title.value,
    description: description.value,
  };

  if (newTask.title !== "" && newTask.description !== "") {
    taskList.push(newTask);
    addTask(newTask, taskList, deletedTasks);
    
    //console.log(taskList); pour verifier que dans le tableaau que la tâches a bien été ajoutée
    //console.log(deletedTasks);pour verifier que dans le tableaau que les tâches supprimées.
  } else {
    alert("Veuillez remplir tous les champs.");
  }
});


