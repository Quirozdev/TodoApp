import createProjectHandler from './createProjectHandler';
import createProjectBtnComponent from './projectBtnComponent';
import todoComponent from './todoComponent';
import db from './db';

const DOMHandler = (() => {
    const content = document.querySelector('.content');

    const clearContent = () => {
        content.innerHTML = '';
    };

    const projectsContainer = document.querySelector('.projects');

    const addProjectBtn = document.getElementById('add-project-btn');
    addProjectBtn.addEventListener('click', function(e) {
        createProjectHandler(this);
    });

    const filterButtons = document.querySelectorAll('.sidebar-btn');
    filterButtons.forEach(filterButton => {
        filterButton.addEventListener('click', (e) => {
            const currentSelectedFilter = document.querySelector('.selected');
            if (currentSelectedFilter) {
                currentSelectedFilter.classList.remove('selected');
            }
            filterButton.classList.add('selected');
        });
    });

    const pendingTodosBtn = document.getElementById('pending-todos-btn');
    pendingTodosBtn.addEventListener('click', () => {
        DOMHandler.clearContent();
        const pendingTodos = db.getAllPendingTodosInEachProject();
        Object.keys(pendingTodos).forEach(projectId => {
            displayTodos(pendingTodos[projectId], projectId);
        });
    });

    const completedTodosBtn = document.getElementById('completed-todos-btn');
    completedTodosBtn.addEventListener('click', () => {
        DOMHandler.clearContent();
        const completedTodos = db.getAllCompletedTodosInEachProject();
        Object.keys(completedTodos).forEach(projectId => {
            displayTodos(completedTodos[projectId], projectId);
        });
    });

    const generateTodosContainer = (projectTodos, projectId) => {
        const todosContainer = document.createElement('div');
        todosContainer.classList.add('todos-container');
        todosContainer.setAttribute('data-project-id', projectId);

        projectTodos.forEach((projectTodo) => {
            const todoContainer = todoComponent(projectTodo);
            todosContainer.appendChild(todoContainer);
        });

        return todosContainer;
    };

    const insertAddTodoBtn = (addTodoBtn) => {
        content.appendChild(addTodoBtn);
    };

    const insertDeleteThisProjectBtn = (deleteThisProjectBtn) => {
        content.appendChild(deleteThisProjectBtn);
    };

    const displayTodos = (todos, projectId) => {

        const project = db.getProject(projectId);

        const todosContainer = generateTodosContainer(todos, project.id);        

        const projectTitleElement = document.createElement('h2');
        projectTitleElement.textContent = project.name;
        
        content.appendChild(projectTitleElement);
        content.appendChild(todosContainer);
    }

    const displayProjects = (projects) => {
        projectsContainer.innerHTML = '';
        projects.forEach((project) => {
            const projectBtn = createProjectBtnComponent(project);
            projectsContainer.appendChild(projectBtn);
        });
    };

    return { displayProjects, displayTodos, clearContent, insertAddTodoBtn, insertDeleteThisProjectBtn };
})();


export default DOMHandler;