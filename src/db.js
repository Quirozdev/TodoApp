import { Project } from "./classes";

class DB {
    constructor() {
        this.projects = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')).map((project, index) => {
            const newProject = new Project(index, project.name);
            newProject.todos = project.todos;
            return newProject;
        }) : [];
    }

    getAllProjects() {
        return this.projects;
    }

    getProject(index) {
        return this.projects[index];
    }

    updateDatabase() {
        localStorage.setItem("db", JSON.stringify(this.projects));
    }

    saveProject(project) {
        console.log(`Project ${project.name} saved!`);
        this.projects.push(project);
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
}

const db = new DB();

export default db;