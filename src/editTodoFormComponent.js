import { createLabelAndInput, createPrioritySelect, createFormButton } from "./addTodoFormComponent";
import db from "./db";
import { format } from "date-fns";

const editTodoEvent = (editTodoForm) => {
    editTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const projectId = editTodoForm.closest('.todos-container').getAttribute('data-project-id');
        const todoId = editTodoForm.closest('.todo-container').getAttribute('data-todo-id');

        const formData = new FormData(editTodoForm);
        const todoData = {
            id: todoId,
            title: formData.get('title'),
            description: formData.get('description'),
            dueDate: formData.get('due-date'),
            priority: formData.get('priority'),
            completed: false,
            projectId: projectId
        };

        const todoEditedEvent = new CustomEvent('todoedited', {
            detail: {
                todoData: todoData
            }
        });
        document.dispatchEvent(todoEditedEvent);
    });
}

const createEditTodoForm = (todo) => {
    const editTodoForm = document.createElement('form');
    editTodoForm.setAttribute('id', 'edit-todo-form');
    editTodoEvent(editTodoForm);

    console.log(todo.projectId, todo.id);
    const currentTodo = db.obtainTodo(todo.projectId, todo.id);

    const [ todoTitleLabel, todoTitleInput ] = createLabelAndInput('Title', 'text', 'title', 'title', true);
    todoTitleInput.value = currentTodo.title;

    const [ todoDescLabel, todoDescInput ] = createLabelAndInput('Description', 'textarea', 'description', 'description', true);
    todoDescInput.value = currentTodo.description;

    const [ todoDueDateLabel, todoDueDateInput ] = createLabelAndInput('Due Date', 'date', 'due-date', 'due-date', true);
    // to set the input date a value, the date need to be in the following format
    todoDueDateInput.value = format(currentTodo.dueDate, 'yyyy-MM-dd');
    
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