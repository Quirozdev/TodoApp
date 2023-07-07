export class ToDo {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = false;
    }

    toggleCompletion() {
        this.checkList = !this.checkList;
    }
}


export class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    getTodos() {
        return this.todos;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    deleteTodo(todoId) {
        this.todos.splice(todoId, 1);
    }
}