import createSvgElement from "./createSvg";
import createEditTodoForm from "./editTodoFormComponent";
import { titleCase } from "./utils";
import { format } from "date-fns";

const todoComponent = (todo) => {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');
    todoContainer.setAttribute('data-todo-id', todo.id);

    const todoCheckList = document.createElement('input');
    todoCheckList.setAttribute('type', 'checkbox');
    todoCheckList.classList.add('todo-check-list');
    if (todo.completed) {
        todoCheckList.checked = true;
    }

    todoCheckList.addEventListener('change', function(e) {
        const todoCheckListEvent = new CustomEvent('todochecklistchanged', {
            detail: {
                projectId: todo.projectId,
                todoId: todo.id
            }
        });
        document.dispatchEvent(todoCheckListEvent);
    });

    const todoTitle = document.createElement('p');
    todoTitle.textContent = todo.title;
    todoTitle.classList.add('todo-title');

    const todoPriority = document.createElement('p');
    todoPriority.textContent = titleCase(todo.priority);
    todoPriority.classList.add('todo-priority');
    todoPriority.classList.add(todo.priority);

    const todoDescription = document.createElement('p');
    todoDescription.textContent = todo.description;
    todoDescription.classList.add('todo-description');

    const todoDueDate = document.createElement('p');
    todoDueDate.textContent = format(todo.dueDate, 'dd/MM/yyyy');
    todoDueDate.classList.add('todo-due-date');

    const todoEditBtn = document.createElement('button');
    const editSvgObj = {
        viewBox: "0 0 24 24",
        path: {
            d: "M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20.1L20 10.1V8L14 2H6M13 3.5L18.5 9H13V3.5M20.1 13C20 13 19.8 13.1 19.7 13.2L18.7 14.2L20.8 16.3L21.8 15.3C22 15.1 22 14.7 21.8 14.5L20.5 13.2C20.4 13.1 20.3 13 20.1 13M18.1 14.8L12 20.9V23H14.1L20.2 16.9L18.1 14.8Z"
        }
    }
    const editSvg = createSvgElement(editSvgObj);
    todoEditBtn.appendChild(editSvg);
    todoEditBtn.classList.add('todo-edit-btn');
    todoEditBtn.addEventListener('click', function(e) {
        const alreadyAEditForm = document.getElementById('edit-todo-form');
        if (alreadyAEditForm) {
            alreadyAEditForm.remove();
        }
        const editTodoForm = createEditTodoForm(todo);
        todoContainer.appendChild(editTodoForm);
    });

    const todoDeleteBtn = document.createElement('button');
    const deleteSvgObj = {
        viewBox: "0 0 24 24",
        path: {
            d: "M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z"
        }
    }
    const deleteSvg = createSvgElement(deleteSvgObj);
    todoDeleteBtn.appendChild(deleteSvg);
    todoDeleteBtn.classList.add('todo-delete-btn');
    todoDeleteBtn.addEventListener('click', function(e) {
        const projectId = this.closest('.todos-container').getAttribute('data-project-id');
        const todoDeletedEvent = new CustomEvent('tododeleted', {
            detail: {
                projectId,
                todoId: todo.id
            }
        });
        document.dispatchEvent(todoDeletedEvent);
    });

    const relevantInfoContainer = document.createElement('div');
    relevantInfoContainer.classList.add('relevant-info-container');

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container');

    relevantInfoContainer.appendChild(todoCheckList);
    relevantInfoContainer.appendChild(todoTitle);
    relevantInfoContainer.appendChild(todoPriority);
    relevantInfoContainer.appendChild(todoDueDate);
    relevantInfoContainer.appendChild(todoEditBtn);
    relevantInfoContainer.appendChild(todoDeleteBtn);

    descriptionContainer.appendChild(todoDescription);

    todoContainer.appendChild(relevantInfoContainer);
    todoContainer.appendChild(descriptionContainer);

    return todoContainer;
};

export default todoComponent;