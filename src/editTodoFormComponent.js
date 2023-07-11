import { createLabelAndInput, createPrioritySelect, createFormButton } from "./addTodoFormComponent";
import db from "./db";
import { ToDo } from "./classes";

const editTodoEvent = (editTodoForm, todoId) => {
    editTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(todoId);
        const todoData = new FormData(editTodoForm);
        const newTodo = new ToDo(
            todoId,
            todoData.get('title'),
            todoData.get('description'),
            todoData.get('due-date'),
            todoData.get('priority'),
        );
        const projectId = document.querySelector('.selected').getAttribute('data-project-id');
        const todoEditedEvent = new CustomEvent('todoedited', {
            detail: {
                todo: newTodo,
                projectId: projectId
            }
        });
        document.dispatchEvent(todoEditedEvent);
    });
}

const createEditTodoForm = (todoId, todoEditBtn) => {
    const editTodoForm = document.createElement('form');
    editTodoForm.setAttribute('id', 'edit-todo-form');
    editTodoEvent(editTodoForm, todoId);

    const projectId = todoEditBtn.closest('.todos-container').getAttribute('data-project-id');
    const currentTodo = db.obtainTodo(projectId, todoId);

    const [ todoTitleLabel, todoTitleInput ] = createLabelAndInput('Title', 'text', 'title', 'title', true);
    todoTitleInput.value = currentTodo.title;

    const [ todoDescLabel, todoDescInput ] = createLabelAndInput('Description', 'textarea', 'description', 'description', true);
    todoDescInput.value = currentTodo.description;

    const [ todoDueDateLabel, todoDueDateInput ] = createLabelAndInput('Due Date', 'date', 'due-date', 'due-date', true);
    todoDueDateInput.value = currentTodo.dueDate;
    
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    priorityLabel.setAttribute('for', 'priority');
    const prioritySelect = createPrioritySelect(currentTodo.priority);
    
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('edit-todo-form-btns-container');

    const editBtn = createFormButton('Update', 'edit-todo-btn', 'submit', {});
    const cancelBtn = createFormButton('Cancel', 'cancel-btn', 'button', {
        click: function(e) {
            document.getElementById('edit-todo-form').remove();
        }
    });

    editTodoForm.appendChild(todoTitleLabel);
    editTodoForm.appendChild(todoTitleInput);
    editTodoForm.appendChild(todoDescLabel);
    editTodoForm.appendChild(todoDescInput);
    editTodoForm.appendChild(todoDueDateLabel);
    editTodoForm.appendChild(todoDueDateInput);
    editTodoForm.appendChild(priorityLabel);
    editTodoForm.appendChild(prioritySelect);
    buttonsContainer.appendChild(editBtn);
    buttonsContainer.appendChild(cancelBtn);
    editTodoForm.appendChild(buttonsContainer);

    return editTodoForm;
}

export default createEditTodoForm;