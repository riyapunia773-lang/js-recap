// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');

function showTodos() {
  ul.innerHTML = '';

  todoList.forEach((todo, index) => {

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    checkbox.addEventListener('change', () => {
      todoList[index].completed = checkbox.checked;
      console.log(todoList);
    });

    const text = document.createElement('span');
    text.textContent = todo.task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      ul.removeChild(li);
      console.log(todoList);
      showTodos();
    });

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteButton);

    ul.appendChild(li);
  });
}

showTodos();