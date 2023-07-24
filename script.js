/* <div class="modal-container">
<div class="modal">
  <span id="close-button"><i class="fa-solid fa-circle-xmark fa-lg" style="color: #3d4040;"></i></span>
  <form >
      <input type="text" name="title" placeholder="Title" required>
      <input type="text" name="assigne" placeholder="Assigne" required>
      <select name="status" id="">
          <option value="TODO">Todo</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
      </select>
      <textarea name="textarea"  cols="30" rows="10"></textarea>
      <input type="button" value="create">
  </form>
</div>
</div> */

//Create a task menu when clicked in add icon
const create = document.getElementById("create");

const modalContainer = document.createElement("div");

modalContainer.classList.add("modal-container");

modalContainer.innerHTML = `<div class="modal">
<span id="close-button"><i class="fa-solid fa-circle-xmark fa-lg" style="color: #3d4040;"></i></span>

<form id="create-form">
    <input type="text" name="title" placeholder="Title" required>
    <input type="text" name="assigne" placeholder="Assigne" required>
    <select name="status" id="">
        <option value="TODO">Todo</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="DONE">Done</option>
    </select>
    <textarea name="textarea"  cols="30" rows="5" maxlength = "100"></textarea>
    <button>create</button>
</form>
</div>`;


//Object info used to store form data
let info = {};

//Function to add the tasks

function addTasks(info) {
    
}

//Function to extract  form data
const extractData = (event) => {
  event.preventDefault();
  const elements = event.target;
  for (let i = 0; i < elements.length; i++) {
    elements[i].name && (info[elements[i].name] = elements[i].value);
  }
  addTasks(info);
  event.target.removeEventListener("submit", event.target);
  modalContainer.remove();
 
};

//Function to close the form tab/modal
const closeModal = () => {
  modalContainer.remove();
};

create.addEventListener("click", () => {
  document.body.appendChild(modalContainer);
  //Extract data from form
  const form = document.getElementById("create-form");
  form.addEventListener("submit", extractData);
  //To close the task menu;
  const close = document.getElementById("close-button");
  close.addEventListener("click", closeModal);
});
