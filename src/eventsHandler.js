import { ToDo, Project } from "./classes";
import db from "./db";
import DOMHandler from "./domHandler";

const eventsHandler = (() => {
    const initializeCustomEvents = () => {
        document.addEventListener('projectcreated', (e) => {
            const newProject = new Project(db.getIndexForNewProject(), e.detail.projectName);
            db.saveProject(newProject);
            DOMHandler.displayProjects(db.getAllProjects());
            // to auto select the newly created project
            document.querySelector(`[data-project-id="${newProject.id}"]`).click();
        });

        document.addEventListener('projectdeleted', (e) => {
            db.deleteProject(e.detail.projectId);
            DOMHandler.clearContent();
            DOMHandler.displayProjects(db.getAllProjects());
        });

        document.addEventListener('todocreated', (e) => {
            const todoData = e.detail.todoData;
            const todoId = db.getIndexForNewTodo(todoData.projectId);
            const newTodo = new ToDo(
                todoId,
                todoData.title,
                todoData.description,
                todoData.dueDate,
                todoData.priority,
                todoData.completed,
                todoData.projectId
            );
            db.saveTodo(newTodo);

            // to refresh/update all the content
            const selectedOptionBtn = document.querySelector('.selected');
            selectedOptionBtn.click();
        });

        document.addEventListener('todoedited', (e) => {
            const todoData = e.detail.todoData;
            const updatedTodo = new ToDo(
                todoData.id,
                todoData.title,
                todoData.description,
                todoData.dueDate,
                todoData.priority,
                todoData.completed,
                todoData.projectId
            );
            console.log(updatedTodo);
            db.updateTodo(updatedTodo);
            
            const selectedOptionBtn = document.querySelector('.selected');
            selectedOptionBtn.click();
        });

        document.addEventListener('tododeleted', (e) => {
            db.deleteTodo(e.detail.projectId, e.detail.todoId);

            const selectedOptionBtn = document.querySelector('.selected');
            selectedOptionBtn.click();
        });

        document.addEventListener('todochecklistchanged', (e) => {
            db.changeTodoCompletionState(e.detail.projectId, e.detail.todoId);

            const selectedOptionBtn = document.querySelector('.selected');
            selectedOptionBtn.click();
        });
    };
    return { initializeCustomEvents };
})();

export default eventsHandler;
