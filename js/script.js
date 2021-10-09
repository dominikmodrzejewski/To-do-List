let todoInput // miejsce gdzie uzytkownik wpisuje tresc zadania
let errorInfo // info o braku zadan / koniecznosci wpisania tekstu
let addBtn // przycisk ADD - dodaje nowe elementy do listy
let ulList // lista zadań, tagi UL
let newTodo // nowe dodane LI, nowe zadanie
let popup // popup
let popupInfo // tekst w popupie, jak sie doda pusty tekst
let todoToEdit // edytowany Todo
let popupInput // input w popupie
let popupAddBtn // przycisk 'zatwierdz' w popupie
let popupCloseBtn // przycisk 'anuluj' w popupie

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
	popup = document.querySelector('.popup')
	popupInfo = document.querySelector('.popup-info')
	popupInput = document.querySelector('.popup-input')
	popupAddBtn = document.querySelector('.accept')
	popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTodo)
	ulList.addEventListener('click', checkClick)
	popupCloseBtn.addEventListener('click', closePopup)
	popupAddBtn.addEventListener('click', changeTodoText)
	todoInput.addEventListener('keyup', enterKeyCheck)
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
	editButton.textContent = 'EDIT'

	const deleteButton = document.createElement('button')
	deleteButton.classList.add('delete')
	deleteButton.innerHTML = '<i class="fas fa-times"></i>'

	toolsPanel.append(completeButton, editButton, deleteButton)
}

const checkClick = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed')
		e.target.classList.toggle('completed')
	} else if (e.target.matches('.edit')) {
		editTodo(e)
	} else if (e.target.matches('.delete')) {
		deleteTodo(e)
	}
}

const editTodo = e => {
	todoToEdit = e.target.closest('li')
	popupInput.value = todoToEdit.firstChild.textContent
	popup.style.display = 'flex'
}

const closePopup = e => {
	popup.style.display = 'none'
	popupInfo.textContent = ''
}

const changeTodoText = () => {
	if (popupInput.value !== '') {
		todoToEdit.firstChild.textContent = popupInput.value
		popup.style.display = 'none'
		popupInfo.textContent = ''
	} else {
		popupInfo.textContent = 'Musisz podać jakąś tresc'
	}
}

const deleteTodo = e => {
	e.target.closest('li').remove()

	const allTodos = ulList.querySelectorAll('li')

	if (allTodos.length === 0) {
		errorInfo.textContent = 'Brak zadań na liście'
	}
}

const enterKeyCheck = e => {
	if (e.key == 'Enter') {
		addNewTodo()
	}
}

document.addEventListener('DOMContentLoaded', main)
