import toDoObject from "./To_do_object";
let projectsArray = [];

const project = (name, title, description, dueDate, priority) => {
  return {
    name,
    createToDoObject: toDoObject(title, description, dueDate, priority),
  };
};

export default project;
