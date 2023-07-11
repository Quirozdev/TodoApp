import DOMHandler from "./domHandler";
import createAddTodoForm from './addTodoFormComponent';
import createSvgElement from "./createSvg";


const createAddTodoBtn = () => {
    const content = document.querySelector('.content');
    const addTodoBtn = document.createElement('button');
    addTodoBtn.setAttribute('id', 'add-todo-btn');
    const addTodoBtnSvg = createSvgElement({
        viewBox: '0 0 24 24',
        path: {
            d: 'M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z'
        }
    });

    const addTodoBtnText = document.createElement('span');
    addTodoBtnText.textContent = 'Add Todo';

    addTodoBtn.addEventListener('click', function(e) {
        this.style.display = 'none'
        const addTodoForm = createAddTodoForm();
        content.appendChild(addTodoForm);
    });

    addTodoBtn.appendChild(addTodoBtnSvg);
    addTodoBtn.appendChild(addTodoBtnText);

    return addTodoBtn;
}

const createProjectBtnComponent = (project) => {
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('project-btn');
    projectBtn.textContent = project.name;
    projectBtn.setAttribute('data-project-id', project.id);
    projectBtn.addEventListener('click', (e) => {
        const currentSelectedProject = document.querySelector('.selected');
        if (currentSelectedProject) {
            currentSelectedProject.classList.remove('selected');
        }
        projectBtn.classList.add('selected');
    });

    projectBtn.addEventListener('click', function(e) {
        const addTodoBtn = createAddTodoBtn();
        DOMHandler.clearContent();
        DOMHandler.displayTodos(project.getTodos(), project.id);
        DOMHandler.insertAddTodoBtn(addTodoBtn);
    });

    return projectBtn;
};

export { createAddTodoBtn };
export default createProjectBtnComponent;