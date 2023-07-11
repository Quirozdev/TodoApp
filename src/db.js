import { Project, ToDo } from "./classes";

class DB {
    constructor() {
        // convert all json objects into the corresponding class objects, so they get their methods
        this.projects = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')).map((project) => {
            const newProject = new Project(project.name);
            newProject.todos = project.todos.map(todo => {
                return new ToDo(todo.id, todo.title, todo.description, todo.dueDate, todo.priority, todo.completed, newProject.id);
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

    getIndexForNewTodo(projectId) {
        return this.getProject(projectId).getTodos().length;
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

    updateTodo(todo) {
        this.projects[todo.projectId].editTodo(todo.id, todo);
        this.updateDatabase();
    }

    saveTodo(todo) {
        this.projects[todo.projectId].addTodo(todo);
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
        const projectsCopy = [...this.getAllProjects()];
        return projectsCopy.reduce((completedTodosObj, currentProject) => {
            const completedTodos = currentProject.getCompletedTodos();
            if (completedTodos.length !== 0) {
                completedTodosObj[currentProject.id] = currentProject.getCompletedTodos();
            }
            return completedTodosObj;
        }, {});
    }
}

const db = new DB();

export default db;