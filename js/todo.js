const toDoFormSelector = document.querySelector("#toDo-form");
const toDoListSelector = document.querySelector("#toDo-list");
const toDoInputSelector = toDoFormSelector.querySelector("input");

let toDos = [];
const TODOS_KEY = "toDos";
const savedTodos = localStorage.getItem(TODOS_KEY); // localStorage에 저장되어 있는 toDO list

// toDo 목록에 저장하는 함수
function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// check button 눌렀을 때 이벤트 함수
function handleBtnClick(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((item) => item.id !== parseInt(li.id)); // return 값이 false인 경우 제외됨
    li.remove();
    saveTodos();
}

// toDO list를 입력했을 때 실행하는 함수
function toDoListInput(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span);
    span.innerText = newTodo.text;
    li.id = newTodo.id;
    li.appendChild(button);
    button.innerText = "✔";
    button.addEventListener("click", handleBtnClick);
    toDoListSelector.appendChild(li);
} 

// submit 버튼을 눌렀을 때 이벤트 함수
function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInputSelector.value;
    toDoInputSelector.value = "";
    // toDo를 객체로 변환(제거할 시에 id를 이용해 제거할 수 있도록)
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    toDoListInput(newTodoObj);
    saveTodos();
}

toDoFormSelector.addEventListener("submit", handleTodoSubmit)

// 저장되어 있는 리스트가 있으면
if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(toDoListInput);
}