let todoInput // miejsce gdzie uzytkownik wpisuje tresc zadania
let errorInfo // info o braku zadan / koniecznosci wpisania tekstu
let addBtn // przycisk ADD - dodaje nowe elementy do listy
let ulList // lista zadań, tagi UL
let newTodo // nowe dodane LI, nowe zadanie

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
}

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTodo)
}

const addNewTodo = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
        createToolsArea()

        
		ulList.append(newTodo)


		todoInput.value = ''
        errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz tresc zadania'
        
	}
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)

    const completeButton = document.createElement('button')
    completeButton.classList.add('complete')
    completeButton.innerHTML = '<i class="fas fa-check"></i>'
    
    const editButton = document.createElement('button')
    editButton.classList.add('edit')
    editButton.textContent ='EDIT'
    
    
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete')
    deleteButton.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.append(completeButton,editButton,deleteButton)
   
}


document.addEventListener('DOMContentLoaded', main)
