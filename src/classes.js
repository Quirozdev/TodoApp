export class ToDo {

    constructor(id, title, description, dueDate, priority, completed, projectId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
        this.projectId = projectId;
    }

    toggleCompletion() {
        this.completed = !this.completed;
    }
}


export class Project {
    static autoIncrementId = 0;

    constructor(name) {
        this.id = this.constructor.autoIncrementId++;

        this.name = name;
        this.todos = [];
    }

    getTodo(todoId) {
        return this.todos[todoId];
    }

    getTodos() {
        return this.todos;
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
    }
}