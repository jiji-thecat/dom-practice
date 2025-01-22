// タスクをローカルストレージに保存する関数
function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// タスクを表示する関数
function displayTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = ''; // 現在のタスクリストをクリア

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.text;

    // タスクに削除ボタンを追加
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
      deleteTask(index);
    };
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// タスクを追加する関数
function addTask() {
  const newTaskText = document.getElementById('new-task').value;
  if (newTaskText) {
    const newTask = { text: newTaskText };
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(newTask);
    saveTasks(tasks);
    document.getElementById('new-task').value = ''; // 入力フィールドをクリア
    displayTasks(); // タスクを再表示
  }
}

// タスクを削除する関数
function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.splice(index, 1); // 指定したタスクを削除
  saveTasks(tasks);
  displayTasks(); // タスクを再表示
}

const changeText = () => {
  const elem = document.getElementById('text-box');
  elem.innerText = 'JavaScript is awesome!';
};

const addItem = () => {
  const elem = document.getElementById('item-list');
  const child = document.createElement('li');
  child.innerText = 'New Item';
  elem.appendChild(child);
};

const toggleClick = () => {
  const elem = document.getElementById('color-box');
  elem.style.backgroundColor = elem.style.backgroundColor === 'red' ? 'blue' : 'red';
};

const onSubmit = () => {
  const elem = document.getElementById('name-input');
  const displayElem = document.getElementById('greeting');
  if (elem.value === '') {
    return;
  }
  displayElem.innerHTML = `Hello, ${elem.value}`;
  elem.value = '';
};

const onDeleteLastItem = () => {
  const elem = document.getElementById('delete-list');
  const elemList = document.querySelectorAll('#delete-list li');
  if (elemList.length > 0) {
    elem.removeChild(elemList[elemList.length - 1]);
  }
};

const onIncrement = () => {
  const elem = document.getElementById('count');
  elem.innerText = parseInt(elem.innerText) + 1;
};

const onToggleClass = () => {
  const elem = document.getElementById('class-box');
  if (elem.classList.contains('active')) {
    elem.classList.remove('active');
  } else {
    elem.classList.add('active');
  }
};

const addRow = () => {
  const elem = document.getElementById('data-table');
  const newRow = elem.insertRow(-1);
  const newCell = newRow.insertCell(0);
  const newCell2 = newRow.insertCell(1);

  newCell.innerText = 'John';
  newCell2.innerText = '30';
};

let timerId = null;
let count = 1;

const onStartTimer = () => {
  if (timerId) {
    return;
  }
  timerId = setInterval(() => {
    const elem = document.getElementById('timer');
    elem.innerText = count++;
  }, 1000);
};

const onStopTimer = () => {
  clearInterval(timerId);
  timerId = null;
};

const hover = document.getElementById('hover-box');
hover.addEventListener('mouseover', (event) => {
  event.target.innerText = "You're hovering!";
});
hover.addEventListener('mouseleave', (event) => {
  event.target.innerText = 'Hover over me!';
});

// ページが読み込まれたときにタスクを表示
window.onload = displayTasks;
