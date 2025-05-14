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
