interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

const titleInput = document.getElementById("titleInput") as HTMLInputElement;
const descInput = document.getElementById("descInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const todoList = document.getElementById("todoList") as HTMLUListElement;

let todos: Todo[] = [];
let editId: number | null = null;

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.className = "todo-item";

    const titleEl = document.createElement("div");
    titleEl.className = "todo-title";
    titleEl.textContent = todo.title;

    const descEl = document.createElement("div");
    descEl.className = "todo-desc";
    descEl.textContent = todo.description;

    if (todo.done) {
      titleEl.classList.add("strike");
      descEl.classList.add("strike");
      li.classList.add("strike");
    }

    const actions = document.createElement("div");
    actions.className = "todo-actions";

    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = `<i class="fas fa-check"></i>`;
    checkBtn.onclick = () => toggleDone(todo.id);

    const updateBtn = document.createElement("button");
    updateBtn.innerHTML = `<i class="fas fa-edit"></i>`;
    updateBtn.onclick = () => startEdit(todo.id);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteBtn.onclick = () => deleteTodo(todo.id);

    actions.append(checkBtn, updateBtn, deleteBtn);

    li.append(titleEl, descEl, actions);
    todoList.appendChild(li);
  });
}

function addOrUpdateTodo() {
  const title = titleInput.value.trim();
  const description = descInput.value.trim();

  if (!title || !description) return alert("Please fill in both fields.");

  if (editId !== null) {
    const todo = todos.find(t => t.id === editId);
    if (todo) {
      todo.title = title;
      todo.description = description;
    }
    addBtn.textContent = "Add";
    editId = null;
  } else {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      description,
      done: false,
    };
    todos.push(newTodo);
  }

  titleInput.value = "";
  descInput.value = "";
  renderTodos();
}

function toggleDone(id: number) {
  const todo = todos.find(t => t.id === id);
  if (todo) todo.done = !todo.done;
  renderTodos();
}

function startEdit(id: number) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    titleInput.value = todo.title;
    descInput.value = todo.description;
    addBtn.textContent = "Update";
    editId = id;
  }
}

function deleteTodo(id: number) {
  todos = todos.filter(t => t.id !== id);
  renderTodos();
}

addBtn.addEventListener("click", addOrUpdateTodo);
