import { Project } from "./classes";

const createProjectHandler = (addProjectBtn) => {
    const projectsContainer = document.querySelector('.projects');

    const projectNameInput = document.createElement('input');
    projectNameInput.classList.add('project-name-input');

    projectNameInput.value = '';
    addProjectBtn.disabled = true;
    projectsContainer.appendChild(projectNameInput);
    projectNameInput.focus();

    projectNameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const projectName = projectNameInput.value.trim();
            if (projectName) {
                const projectCreatedEvent = new CustomEvent('projectcreated', {
                    detail: {
                        projectName: projectName,
                    }
                });
                document.dispatchEvent(projectCreatedEvent);
            }
            // remove focus from the input, triggering the blur event
            projectNameInput.blur();
        }
    });

    projectNameInput.addEventListener('blur', (e) => {
        if (projectNameInput) {
            projectNameInput.remove();
            addProjectBtn.disabled = false;
        }
    });

    return projectNameInput;
};

export default createProjectHandler;