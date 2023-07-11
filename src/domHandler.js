import createProjectHandler from './createProjectHandler';
import createProjectBtnComponent from './projectBtnComponent';
import createAddTodoForm from './addTodoFormComponent';
import createSvgElement from "./createSvg";
import todoComponent from './todoComponent';
import db from './db';

const DOMHandler = (() => {
    const projectsContainer = document.querySelector('.projects');

    const addProjectBtn = document.getElementById('add-project-btn');
    addProjectBtn.addEventListener('click', function(e) {
        createProjectHandler(this);
    });

    const completedTodosBtn = document.getElementById('completed-todos-btn');
    completedTodosBtn.addEventListener('click', () => {
        const projectsWithCompletedTodos = db.getAllCompletedTodosInEachProject();
    });

    

    const generateTodosContainer = (project) => {
        const todosContainer = document.createElement('div');
        todosContainer.classList.add('todos-container');
        todosContainer.setAttribute('data-project-id', project.id);

        const projectTodos = project.getTodos();
        projectTodos.forEach((projectTodo, todoIndex) => {
            const todoContainer = todoComponent(projectTodo, todoIndex);
            todosContainer.appendChild(todoContainer);
        });

        return todosContainer;
    };

    const createAddTodoBtn = () => {
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
    
        addTodoBtn.appendChild(addTodoBtnSvg);
        addTodoBtn.appendChild(addTodoBtnText);
    
        return addTodoBtn;
    }

    const displayTodos = (projectId) => {
        const content = document.querySelector('.content');
        content.innerHTML = '';

        const project = db.getProject(projectId);

        const todosContainer = generateTodosContainer(project, projectId);

        const addTodoBtn = createAddTodoBtn();
        addTodoBtn.addEventListener('click', function(e) {
            this.style.display = 'none'
            const addTodoForm = createAddTodoForm();
            content.appendChild(addTodoForm);
        });

        const projectTitleElement = document.createElement('h2');
        projectTitleElement.textContent = project.name;
        
        content.appendChild(projectTitleElement);
        content.appendChild(todosContainer);
        content.appendChild(addTodoBtn);
    }

    const displayProjects = (projects) => {
        projectsContainer.innerHTML = '';
        projects.forEach((project, index) => {
            const projectBtn = createProjectBtnComponent(project.name, index);
            projectsContainer.appendChild(projectBtn);
        });
    };

    return { displayProjects, displayTodos };
})();


export default DOMHandler;