import { createProject, createToDo } from "./To_do_object&projects";
import "./styles.css";

const main = document.querySelector("main");
const projectsDiv = document.querySelector(".projectsDiv");
const wrapper = document.querySelector(".wrapper");
const popUpProjectWindow = document.getElementById("popUpProjectWindow");

document
  .getElementById("project")
  .addEventListener("click", projectsHandleClick);
document.getElementById("to-do").addEventListener("click", createToDo);

const home = createProject("Home");
projectsDiv.appendChild(home);
const work = createProject("Work");
projectsDiv.appendChild(work);
const important = createProject("Important");
projectsDiv.appendChild(important);

function projectsHandleClick() {
  popUpProjectWindow.classList.add("active");
}
