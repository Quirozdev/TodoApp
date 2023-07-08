import DOMHandler from "./domHandler";

const createProjectBtnComponent = (projectName, id) => {
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('project-btn');
    projectBtn.textContent = projectName;
    projectBtn.setAttribute('data-project-id', id);
    projectBtn.addEventListener('click', (e) => {
        const currentSelectedProject = document.querySelector('.selected');
        if (currentSelectedProject) {
            currentSelectedProject.classList.remove('selected');
        }
        e.target.classList.add('selected');
    });

    projectBtn.addEventListener('click', function(e) {
        DOMHandler.displayTodos(e.target.getAttribute('data-project-id'));
    });

    return projectBtn;
};

export default createProjectBtnComponent;