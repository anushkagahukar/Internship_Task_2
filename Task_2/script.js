// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  if (!name || !email || !message) {
    formMessage.textContent = "All fields are required!";
    formMessage.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address!";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Form submitted successfully!";
  formMessage.style.color = "green";
  document.getElementById('contactForm').reset();
});

// To-do list logic
function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  const taskList = document.getElementById('taskList');

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  input.value = "";
}
