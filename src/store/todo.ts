import { makeAutoObservable } from "mobx"
import {ITodo} from "../types/Todo"

class Todo {
	todos = [
		{id: 1, title: 'Сходи в магазин', completed: false},
		{id: 2, title: 'Посмотри Ulbi TV', completed: false},
		{id: 3, title: 'Поставь лайк', completed: false},
	]

	constructor() {
		makeAutoObservable(this)
	}

	addTodo(todo: ITodo) {
		this.todos.push(todo)
	}

	removeTodo(id: number) {
		this.todos = this.todos.filter(todo => todo.id !== id)
	}

	completeTodo(id: number) {
		this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
	}
}

export default new Todo()