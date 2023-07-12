import { parseISO } from "date-fns";

export class ToDo {

    constructor(id, title, description, dueDate, priority, completed, projectId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = parseISO(dueDate);
        this.priority = priority;
        this.completed = completed;
        this.projectId = projectId;
    }

    toggleCompletion() {
        this.completed = !this.completed;
    }
}


export class Project {
    constructor(id, name) {
        this.id = id;

        this.name = name;
        this.todos = [];
    }

    getTodo(todoId) {
        return this.todos[todoId];
    }

    getTodos() {
        return this.todos;
    }

    getTodosForToday() {
        return this.todos.filter(todo => {
            return todo.dueDate
        });
    }

    getPendingTodos() {
        return this.todos.filter(todo => !todo.completed);
    }

    getCompletedTodos() {
        return this.todos.filter(todo => todo.completed);
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    editTodo(todoId, updatedTodo) {
        this.todos[todoId] = updatedTodo;
    }

    deleteTodo(todoId) {
        this.todos.splice(todoId, 1);
        // this is to reassing the ids to each todo, because they are referenced by their index position
        // in the project array, with their id
        this.todos.forEach((todo, index) => {
            todo.id = index;
        });
    }
}