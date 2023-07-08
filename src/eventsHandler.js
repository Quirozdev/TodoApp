import db from "./db";
import DOMHandler from "./domHandler";

const eventsHandler = (() => {
    const initializeCustomEvents = () => {
        document.addEventListener('projectcreated', (e) => {
            db.saveProject(e.detail.project);
            DOMHandler.displayProjects(db.getAllProjects());
        });

        document.addEventListener('todocreated', (e) => {
            db.saveTodo(e.detail.todo, e.detail.projectId);
            DOMHandler.displayTodos(e.detail.projectId);
        });

        document.addEventListener('tododeleted', (e) => {
            db.deleteTodo(e.detail.projectId, e.detail.todoId);
            DOMHandler.displayTodos(e.detail.projectId);
        });
    };
    return { initializeCustomEvents };
})();

export default eventsHandler;
