import { Project, ToDo } from "./classes";

class DB {
    constructor() {
        // convert all json objects into the corresponding class objects, so they get their methods
        this.projects = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')).map((project, index) => {
            const newProject = new Project(index, project.name);
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

    getIndexForNewProject() {
        return this.projects.length;
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
        this.projects.push(project);
        this.updateDatabase();
        console.log(`Project ${project.name} saved!`);
    }

    deleteProject(projectId) {
        this.projects.splice(projectId, 1);
        // this is to reassing the ids to each poroject, because they are referenced by their index position
        // in the db array, with their id
        this.projects.forEach((project, index) => {
            project.id = index;
        });
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

    getAllPendingTodosInEachProject() {
        const projectsCopy = [...this.getAllProjects()];
        return projectsCopy.reduce((pendingTodosObj, currentProject) => {
            const pendingTodos = currentProject.getPendingTodos();
            if (pendingTodos.length !== 0) {
                pendingTodosObj[currentProject.id] = pendingTodos;
            }
            return pendingTodosObj;
        }, {});
    }

    getAllCompletedTodosInEachProject() {
        const projectsCopy = [...this.getAllProjects()];
        return projectsCopy.reduce((completedTodosObj, currentProject) => {
            const completedTodos = currentProject.getCompletedTodos();
            if (completedTodos.length !== 0) {
                completedTodosObj[currentProject.id] = completedTodos;
            }
            return completedTodosObj;
        }, {});
    }
}

const db = new DB();

export default db;