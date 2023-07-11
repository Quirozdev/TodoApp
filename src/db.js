import { Project, ToDo } from "./classes";

class DB {
    constructor() {
        // convert all json objects into the corresponding class objects, so they get their methods
        this.projects = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')).map((project, index) => {
            const newProject = new Project(index, project.name);
            newProject.todos = project.todos.map(todo => {
                return new ToDo(todo.id, todo.title, todo.description, todo.dueDate, todo.priority, todo.completed);
            });
            return newProject;
        }) : [];
    }

    getAllProjects() {
        return this.projects;
    }

    getProject(index) {
        return this.projects[index];
    }

    obtainTodo(projectId, todoId) {
        return this.projects[projectId].getTodo(todoId);
    }

    updateDatabase() {
        localStorage.setItem("db", JSON.stringify(this.projects));
    }

    saveProject(project) {
        console.log(`Project ${project.name} saved!`);
        this.projects.push(project);
        this.updateDatabase();
    }

    updateTodo(todo, projectId) {
        this.projects[projectId].editTodo(todo.id, todo);
        this.updateDatabase();
    }

    saveTodo(todo, projectId) {
        this.projects[projectId].addTodo(todo);
        this.updateDatabase();
    }

    deleteTodo(projectId, todoId) {
        this.getProject(projectId).deleteTodo(todoId);
        this.updateDatabase();
    }

    changeTodoCompletionState(projectId, todoId) {
        this.obtainTodo(projectId, todoId).toggleCompletion();
        this.updateDatabase();
    }

    getAllCompletedTodosInEachProject() {
        return this.projects.filter(project => {
           const completedTodos = project.filter(todo => {
                return todo.completed;
            });
            // return only the projects which have completed todos
            return completedTodos.length !== 0;
        });
    }
}

const db = new DB();

export default db;