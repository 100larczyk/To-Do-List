import toDoObject from "./To_do_object";
import project from "./project";
const first = toDoObject("new", "sth new to do", "02.02.2022", "high");
console.log(first);

const firstProject = project("school", "old", "sth", "03.03.03", "medium");
console.log(firstProject);
console.log(firstProject.name);
