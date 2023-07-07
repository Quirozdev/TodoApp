import { Project } from "./classes";

class DB {
    constructor() {
        this.projects = JSON.parse(localStorage.getItem('db')).map(project => {
            const newProject = new Project(project.name);
            newProject.todos = project.todos;
            return newProject;
        }) || [];
    }

    getAllProjects() {
        return this.projects;
    }

    getProject(index) {
        return this.projects[index];
    }

    saveProject(project) {
        console.log(`Project ${project.name} saved!`);
        this.projects.push(project);
        localStorage.setItem("db", JSON.stringify(this.projects));
    }
}

const db = new DB();

export default db;