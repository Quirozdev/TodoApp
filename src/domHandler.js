import createProjectHandler from './createProjectHandler';
import createProjectBtnComponent from './projectBtnComponent';
import { ToDo } from './classes';
import db from './db';

const DOMHandler = (() => {
    const content = document.querySelector('.content');
    const projectsContainer = document.querySelector('.projects');
    const addProjectBtn = document.getElementById('add-project-btn');
    const todosContainer = document.querySelector('.todos-container');
    const addTodoBtn = document.querySelector('#add-todo-btn');
    addTodoBtn.style.display = 'none';

    addProjectBtn.addEventListener('click', (e) => {
        createProjectHandler(e.target);
    });


    const displayTodos = (projectId) => {
        todosContainer.innerHTML = '';
        const project = db.getProject(projectId);
        const projectTodos = project.getTodos();
        projectTodos.forEach(projectTodo => {
            const todoContainer = document.createElement('div');
            todoContainer.classList.add('todo-container');
            const todoTitle = document.createElement('p');
            todoTitle.textContent = projectTodo.title;

            todoContainer.appendChild(todoTitle);
            todosContainer.appendChild(todoContainer);
        });

        const addTodoBtn = document.createElement('button');
        addTodoBtn.textContent = 'Add Todo';
    };

    // moverlo a otra parte!!!!!
    addTodoBtn.addEventListener('click', (e) => {
        const projectId = document.querySelector('.selected').getAttribute('data-project-id');
        const project = db.getProject(projectId);
        const newTodo = new ToDo('test', 'si', 'aaa', 1, 'wow');
        project.addTodo(newTodo);
        db.saveProject(project);
        displayTodos(projectId);
        console.log(projectId);
    })

    const displayProjects = (projects) => {
        projectsContainer.innerHTML = '';
        projects.forEach((project, index) => {
            const projectBtn = createProjectBtnComponent(project.name, index);
            projectBtn.addEventListener('click', (e) => {
                todosContainer.innerHTML = '';
                const projectTitleElement = document.createElement('h2');
                projectTitleElement.textContent = project.name;
                todosContainer.appendChild(projectTitleElement);
                displayTodos(e.target.getAttribute('data-project-id'));
                addTodoBtn.style.display = 'block';
            });
            projectsContainer.appendChild(projectBtn);
        });
    };

    return { displayProjects };
})();


export default DOMHandler;