/* Seleção de elementos */

const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');

const filtro = document.querySelector('#filter-select');
const filterDone = document.querySelector('#filter-done');
const filterTodo = document.querySelector
('#filter-todo');

const titleModo = document.querySelector('.title-todo-modo');
const placeHolderInput = document.querySelector('#todo-input')

const selectModo = document.querySelector('#control')

const search = document.querySelector('#search-input');

const tituloControle = document.querySelector('.title-todo');

let oldInputValue;

let chave = localStorage.getItem('chaveAtual');

document.addEventListener('DOMContentLoaded', () => {


    const valorPadrao = 'todo-list'

    const modoAtual = localStorage.getItem('ultimaOpcao') || valorPadrao
    console.log(modoAtual)

    if(modoAtual === 'bags-control') {

        tituloControle.innerText = 'Controle de sacola';
        titleModo.innerText = 'Adicione a venda';
        placeHolderInput.placeholder = "Quem pegou?";
        filterDone.innerText = 'Pagos';
        filterTodo.innerText = 'A Pagar';

    } else if(modoAtual === 'todo-list') {

        tituloControle.innerText = "Lista de tarefas";
        titleModo.innerText = 'Adicione sua tarefa';
        placeHolderInput.placeholder = "O que você vai fazer?";

    } else if(modoAtual === 'market-list') {

        tituloControle.innerText = "Lista de compras";
        titleModo.innerText = 'Adicione o item';
        placeHolderInput.placeholder = "O que você vai comprar?";
        filterDone.innerText = 'comprados';
        filterTodo.innerText = 'A comprar';

    } else if(modoAtual === 'grilo-list') {

        tituloControle.innerText = "Tarefas Grilo";titleModo.innerText = 'Adicione sua tarefa';
        placeHolderInput.placeholder = "O que você vai fazer?";

    } else if(modoAtual === 'bags-control-walter') {

        tituloControle.innerText = 'Sacolas Walter';
        titleModo.innerText = 'Adicione a venda';
        placeHolderInput.placeholder = "Quem pegou?"
        filterDone.innerText = 'Pagos';
        filterTodo.innerText = 'A Pagar';

    } else if(modoAtual === 'bags-control-ninim') {

        tituloControle.innerText = 'Sacolas Ninin';
        titleModo.innerText = 'Adicione a venda';
        placeHolderInput.placeholder = "Quem pegou?"
        filterDone.innerText = 'Pagos';
        filterTodo.innerText = 'A Pagar';

    }

    selectModo.value = modoAtual
   

})


let tarefasRecuperadas = JSON.parse(localStorage.getItem(chave))

console.log(tarefasRecuperadas)


/* Funções */

search.addEventListener('input', () => {
    buscarTarefas(search.value.toLowerCase())
    search.focus()
})


const buscarTarefas = (termo) => {
    todoList.innerText = '';

    let tarefasFiltradas = tarefasRecuperadas.filter(tarefa => tarefa.titulo.toLowerCase().includes(termo));

    tarefasFiltradas.forEach(tarefa => {
        saveTodo(tarefa.titulo, tarefa.sit, 'todo')
    })

}

selectModo.addEventListener('change', () => {

    todoList.innerHTML = '';

    if(selectModo.value === 'bags-control') {
        tituloControle.innerText = 'Controle de sacola';
        titleModo.innerText = 'Adicione a venda';
        placeHolderInput.placeholder = "Quem pegou?"
        filterDone.innerText = 'Pagos';
        filterTodo.innerText = 'A Pagar';
        chave = 'sacola';

        localStorage.setItem('ultimaOpcao', selectModo.value)

        localStorage.setItem('chaveAtual', 'sacola')

        tarefasRecuperadas = JSON.parse(localStorage.getItem(chave))

        let i
        for(i = 0; i < tarefasRecuperadas.length; i++) {
            saveTodo(tarefasRecuperadas[i].titulo, tarefasRecuperadas[i].sit, 'todo');
        }


    } else if(selectModo.value === 'todo-list') {
        tituloControle.innerText = "Lista de tarefas";
        titleModo.innerText = 'Adicione sua tarefa';
        placeHolderInput.placeholder = "O que você vai fazer?";
        filterDone.innerText = 'Feitos';
        filterTodo.innerText = 'A fazer';
        chave = 'tarefas';

        localStorage.setItem('ultimaOpcao', selectModo.value)

        localStorage.setItem('chaveAtual', 'tarefas')

        tarefasRecuperadas = JSON.parse(localStorage.getItem(chave))

        let i
        for(i = 0; i < tarefasRecuperadas.length; i++) {
            saveTodo(tarefasRecuperadas[i].titulo, tarefasRecuperadas[i].sit, 'todo');
        }

    } else if(selectModo.value === 'market-list') {
        tituloControle.innerText = "Lista de compras";
        titleModo.innerText = 'Adicione o item';
        placeHolderInput.placeholder = "O que você vai comprar?";
        filterDone.innerText = 'comprados';
        filterTodo.innerText = 'A comprar';
        chave = 'compras';

        localStorage.setItem('ultimaOpcao', selectModo.value)

        localStorage.setItem('chaveAtual', 'compras')

        tarefasRecuperadas = JSON.parse(localStorage.getItem(chave))

        let i
        for(i = 0; i < tarefasRecuperadas.length; i++) {
            saveTodo(tarefasRecuperadas[i].titulo, tarefasRecuperadas[i].sit, 'todo');
        }

    } else if(selectModo.value === 'grilo-list') {
        tituloControle.innerText = "Tarefas Grilo";
        titleModo.innerText = 'Adicione sua tarefa';
        placeHolderInput.placeholder = "O que você vai fazer?";
        filterDone.innerText = 'Feitos';
        filterTodo.innerText = 'A fazer';
        chave = 'grilo';

        localStorage.setItem('ultimaOpcao', selectModo.value)

        localStorage.setItem('chaveAtual', 'grilo')

        tarefasRecuperadas = JSON.parse(localStorage.getItem(chave))

        let i
        for(i = 0; i < tarefasRecuperadas.length; i++) {
            saveTodo(tarefasRecuperadas[i].titulo, tarefasRecuperadas[i].sit, 'todo');
        }

    } else if(selectModo.value === 'bags-control-walter') {
        tituloControle.innerText = 'Sacolas Walter';
        titleModo.innerText = 'Adicione a venda';
        placeHolderInput.placeholder = "Quem pegou?"
        filterDone.innerText = 'Pagos';
        filterTodo.innerText = 'A Pagar';
        chave = 'walter';

        localStorage.setItem('ultimaOpcao', selectModo.value)

        localStorage.setItem('chaveAtual', 'walter')

        tarefasRecuperadas = JSON.parse(localStorage.getItem(chave))

        let i
        for(i = 0; i < tarefasRecuperadas.length; i++) {
            saveTodo(tarefasRecuperadas[i].titulo, tarefasRecuperadas[i].sit, 'todo');
        }
    } else if(selectModo.value === 'bags-control-ninim') {
        tituloControle.innerText = 'Sacolas Ninim';
        titleModo.innerText = 'Adicione a venda';
        placeHolderInput.placeholder = "Quem pegou?"
        filterDone.innerText = 'Pagos';
        filterTodo.innerText = 'A Pagar';
        chave = 'ninim';

        localStorage.setItem('ultimaOpcao', selectModo.value)

        localStorage.setItem('chaveAtual', 'ninim')

        tarefasRecuperadas = JSON.parse(localStorage.getItem(chave))

        let i
        for(i = 0; i < tarefasRecuperadas.length; i++) {
            saveTodo(tarefasRecuperadas[i].titulo, tarefasRecuperadas[i].sit, 'todo');
        }
    }

})


filtro.addEventListener('change' , () => {

    if(filtro.value === 'all') {

        todoList.innerText = ''

        let i
        for(i = 0; i < tarefasRecuperadas.length; i++) {
            saveTodo(tarefasRecuperadas[i].titulo, tarefasRecuperadas[i].sit, 'todo');
        }
    }

    if(filtro.value === 'done') {

        todoList.innerText = ''

        const tarefasFeitas = tarefasRecuperadas.filter(item => item.sit === 'done');

        let i
        for(i = 0; i < tarefasFeitas.length; i++) {
            saveTodo(tarefasFeitas[i].titulo, tarefasFeitas[i].sit, 'todo');
        }
    }

    if(filtro.value === 'todo') {
        todoList.innerText = '';
        const tarefasAFazer = tarefasRecuperadas.filter(item => !item.sit)

        let i
        for(i = 0; i < tarefasAFazer.length; i++) {
            saveTodo(tarefasAFazer[i].titulo, tarefasAFazer[i].sit, 'todo');
        }
    }

} )

/* Continuar filtro  */


const iniciaComTarefas = () => {

    
    if(tarefasRecuperadas != null) {

        
        let i
        for(i = 0; i < tarefasRecuperadas.length; i++) {
            saveTodo(tarefasRecuperadas[i].titulo,  tarefasRecuperadas[i].sit, 'todo');

        }

    }


}

const saveTodo = (text, sit, display) => {
    const todo = document.createElement("div");

    todo.classList.add(sit)
    todo.classList.add(display)


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

if(filtro.value === 'all') {

    iniciaComTarefas()
}


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
    let arrayTarefas = JSON.parse(localStorage.getItem(chave)) || [];

    arrayTarefas.push({id:arrayTarefas.length, titulo: e});

    localStorage.setItem(chave, JSON.stringify(arrayTarefas));

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

                    localStorage.setItem(chave, JSON.stringify(tarefasRecuperadas));

                } else {

                    tarefasRecuperadas[i].sit = 'done'
        
                    localStorage.setItem(chave, JSON.stringify(tarefasRecuperadas));

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
                    
                    localStorage.setItem(chave, JSON.stringify(tarefasRecuperadas));

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
    
                localStorage.setItem(chave, JSON.stringify(tarefasRecuperadas));
            }
        }
    }
    toggleForms()
})