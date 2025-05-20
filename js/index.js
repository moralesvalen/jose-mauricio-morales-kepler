const today = new Date();
const footer = document.createElement("footer");
const body = document.querySelector("body");
body.appendChild(footer);

const addFooter = document.querySelector("footer");
const pha = document.createElement("p");
pha.textContent = `\u00A9Jose Mauricio Morales ${today.getFullYear()}`;

addFooter.appendChild(pha);

const arrSkils = [
  "PowerBuilder",
  "SQL",
  "WordPress",
  "Joomla",
  "CSS",
  "HTML",
  "GitHub",
  "JavaScript",
];

const skills = document.querySelector("#skills");

arrSkils.forEach((skill) => {
  const li = document.createElement("li");
  li.className = "skillsItem";
  li.textContent = skill;
  skills.appendChild(li);
});

const messageForm = document.querySelector('form[name="leave_message"]');
const li = document.querySelector("#messages h2");
li.style.display = "none";

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = event.target.usersName.value;
  const email = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log("User Name: " + username);
  console.log("E-mail: " + email);
  console.log("Message: " + usersMessage);

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.className = "message";
  newMessage.innerHTML = `<div class="card"><a href="mailito: ${email}">${username}</a> <span>${usersMessage}</span></div>`;

  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.className = "removeButton";
  removeButton.type = "button";

  const editButton = document.createElement("button");
  editButton.textContent = "edit";
  editButton.className = "editButton";
  editButton.type = "button";

  removeButton.addEventListener("click", (event) => {
    const entry = event.target.parentNode;
    entry.remove();
    if (messageList.children.length > 0) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });

  editButton.addEventListener("click", (event) => {
    const entry = event.target.parentNode;
    const card = entry.querySelector(".card");
    const messageText = card.querySelector("span");

    const input = document.createElement("input");
    input.type = "text";
    input.className = "editInput";
    input.value = messageText.textContent;

    const saveButton = document.createElement("button");
    saveButton.textContent = "save";
    saveButton.className = "saveButton";
    saveButton.type = "button";

    saveButton.addEventListener("click", () => {
      messageText.textContent = input.value;
      messageText.style.display = "inline";
      card.removeChild(input);
      newMessage.removeChild(saveButton);
      editButton.style.display = "inline";
    });

    messageText.style.display = "none";
    editButton.style.display = "none";

    card.appendChild(input);
    newMessage.appendChild(saveButton);
  });
  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);

  messageList.appendChild(newMessage);

  messageForm.reset();
  if (messageList.children.length > 0) {
    li.style.display = "block";
  }
});
