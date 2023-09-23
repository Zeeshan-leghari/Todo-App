let taskListContainer  = document.getElementById("taskadd");

let TODOTASKADD = () => {
  let input = document.getElementById("inputbox").value;

  if (input.length > 0) {

    let taskItem = document.createElement("li");
    taskItem.textContent = input;


    let editbutton = document.createElement("i");
    editbutton.className = "fa fa-pencil";
    editbutton.style.margin = "10px";


    let removeButton = document.createElement("i");
    removeButton.className = "fa fa-remove";

    removeButton.addEventListener("click", () => {
      taskItem.remove();
    });


    editbutton.addEventListener('click', () => {
      let newtext = prompt('Enter New text here', input);
      if (newtext !== null) {
        taskItem.textContent = newtext;
        taskItem.appendChild(editbutton);
        taskItem.appendChild(removeButton);
      }

      newtext="";

    })


    taskItem.appendChild(editbutton);
    taskItem.appendChild(removeButton);
    taskListContainer .appendChild(taskItem);




  }
  else {
    alert("Enter Your Task ")
  }


};
