export class ToDo {
    constructor(id, title, description, dueDate, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = false;
    }

    toggleCompletion() {
        this.checkList = !this.checkList;
    }
}


export class Project {
    constructor(id, name) {
        this.id = id;
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