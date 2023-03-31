let projectsArray = [];

const project = (name) => {
  return { name, toDoObject : toDo()};
};

const toDo = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
};

function createProject(name) {
  const newProjectDiv = document.createElement("div");
  newProjectDiv.className = "newProjectDiv"
  const newProject = project(name);
  console.log(newProject);
  projectsArray.push(newProject);
  console.log(projectsArray);
  newProjectDiv.textContent = newProject.name;
  return newProjectDiv
}


function createToDo(title, description, dueDate, priority) {
  const newToDo = toDoObject(title, description, dueDate, priority);
  console.log(newToDo);
}



export { createProject, createToDo };
