import { v4 as uuid } from 'uuid';
import "../src/sass/style.css"
type Tasktype = {
  id: string,
  title: string,
  completed: boolean,
  createAt: Date
}

const list = document.querySelector<HTMLUListElement>('#list');
const form = document.getElementById('form') as HTMLFormElement;
const input = document.querySelector<HTMLInputElement>('#title');

const tasks:Tasktype[] = loadTasks()
tasks.forEach(addListtItem)


form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input?.value == '' || input?.value == null) return;
  
  const newTask = {
    id: uuid(),
    title: input.value,
    completed: true,
    createAt: new Date(),
  };
  tasks.push(newTask);
  saveTasks();
  
  addListtItem(newTask);
  input.value = ""
});

function addListtItem(task: Tasktype) {
  const item = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.addEventListener('change',()=>{
    task.completed = checkbox.checked;
    saveTasks()
  })
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
  return;
}

function saveTasks(){
  localStorage.setItem("TASKITEMS",JSON.stringify(tasks))
}
function loadTasks():Tasktype[] {
    const taskJSON = localStorage.getItem("TASKITEMS")
    if (taskJSON == null) return []
    return JSON.parse(taskJSON);
      
}
