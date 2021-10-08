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
		ulList.append(newTodo)

		todoInput.value = ''
        errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz tresc zadania'
        
	}
}

document.addEventListener('DOMContentLoaded', main)
