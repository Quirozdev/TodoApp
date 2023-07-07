import db from "./db";
import DOMHandler from "./domHandler";

const eventsHandler = (() => {
    const initializeCustomEvents = () => {
        document.addEventListener('projectcreated', (e) => {
            db.saveProject(e.detail.project);
            DOMHandler.displayProjects(db.getAllProjects());
        });
    };
    return { initializeCustomEvents };
})();

export default eventsHandler;
