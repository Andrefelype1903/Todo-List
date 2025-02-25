/* Seleção de elementos */

const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');

let oldInputValue;


let tarefasRecuperadas = JSON.parse(localStorage.getItem('tarefas'))
console.log(tarefasRecuperadas)


/* Funções */

const iniciaComTarefas = () => {
    if(tarefasRecuperadas != null) {
        let i
        for(i = 0; i < tarefasRecuperadas.length; i++) {
            saveTodo(tarefasRecuperadas[i].titulo,  tarefasRecuperadas[i].sit);

            console.log(tarefasRecuperadas[i].sit)
        }
    }
}

const saveTodo = (text, sit) => {
    const todo = document.createElement("div");

    todo.classList.add(sit)
    todo.classList.add('todo')

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);
    
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);
    todoInput.value = "";
    todoInput.focus();

}

iniciaComTarefas()

const toggleForms = () => {
    editForm.classList.toggle('hide');
    todoForm.classList.toggle('hide');
    todoList.classList.toggle('hide');
}

const updateTodo = (text) => {

    const todos = document
    .querySelectorAll(".todo")

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        if(todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text
        }
    })
}



const saveLocalStorage = (e) => {
    let arrayTarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    arrayTarefas.push({id:arrayTarefas.length, titulo: e});

    localStorage.setItem('tarefas', JSON.stringify(arrayTarefas));

    location.reload();
}


/* Eventos */


todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if(inputValue) {
        saveTodo(inputValue)
        saveLocalStorage(inputValue.trim())
        location.reload()
    }
    location.reload()
})


document.addEventListener('click', (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText;
    }


    if(targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done");

        let i;


        for(i = 0; i < tarefasRecuperadas.length; i++) {

            if(tarefasRecuperadas[i].titulo === todoTitle) {
                
                if(tarefasRecuperadas[i].sit === "done") {

                    delete tarefasRecuperadas[i].sit;

                    localStorage.setItem('tarefas', JSON.stringify(tarefasRecuperadas));

                } else {

                    tarefasRecuperadas[i].sit = 'done'
        
                    localStorage.setItem('tarefas', JSON.stringify(tarefasRecuperadas));

                }
            }
        }
    }

    if(targetEl.classList.contains("remove-todo")) {
        parentEl.remove();

        let i;
        for(i = 0; i < tarefasRecuperadas.length; i++) {
            if(tarefasRecuperadas[i].titulo === todoTitle) {

               /*  let newList = tarefasRecuperadas.filter(item => item !== tarefasRecuperadas[i])
                localStorage.setItem('tarefas', JSON.stringify(newList))
                tarefasRecuperadas = newList */

               /*  let index = tarefasRecuperadas.indexOf(tarefasRecuperadas[i]);
                
                console.log(index) */

                    tarefasRecuperadas.splice(i, 1)
                    
                    localStorage.setItem('tarefas', JSON.stringify(tarefasRecuperadas));

                    Location.reload()
            
            }
        }
    }

    if(targetEl.classList.contains("edit-todo")) {
        toggleForms();
        editInput.value = todoTitle;
        oldInputValue = todoTitle;

    }
})

cancelEditBtn.addEventListener('click', (e) => {
    e.preventDefault();

    toggleForms()
})


editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const editInputValue = editInput.value;

    if(editInputValue) {
        updateTodo(editInputValue);

        let i;

        for(i = 0; i < tarefasRecuperadas.length; i++) {

            if(tarefasRecuperadas[i].titulo === oldInputValue) {

                tarefasRecuperadas[i].titulo = editInputValue
    
                localStorage.setItem('tarefas', JSON.stringify(tarefasRecuperadas));
            }
        }
    }
    toggleForms()
})