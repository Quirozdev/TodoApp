import { ToDo } from "./classes";

const createLabelAndInput = (labelText, inputType, inputId, inputName, required) => {
    const label = document.createElement('label');
    label.textContent = labelText;
    label.setAttribute('for', inputId);

    let input;
    if (inputType !== 'textarea') {
        input = document.createElement('input');
        input.setAttribute('type', inputType);
    } else {
        input = document.createElement('textarea');
    }
    input.setAttribute('id', inputId);
    input.setAttribute('name', inputName);
    if (required) input.setAttribute('required', '');

    return [label, input];
}

const createPrioritySelect = (defaultOption) => {
    const prioritySelect = document.createElement('select');
    prioritySelect.setAttribute('id', 'priority');
    prioritySelect.setAttribute('name', 'priority');

    const lowOption = document.createElement('option');
    lowOption.textContent = 'Low';
    lowOption.classList.add('low');
    lowOption.setAttribute('value', 'low');

    const mediumOption = document.createElement('option');
    mediumOption.textContent = 'Medium';
    mediumOption.classList.add('medium');
    mediumOption.setAttribute('value', 'medium');

    const highOption = document.createElement('option');
    highOption.textContent = 'High';
    highOption.classList.add('high');
    highOption.setAttribute('value', 'high');

    prioritySelect.appendChild(lowOption);
    prioritySelect.appendChild(mediumOption);
    prioritySelect.appendChild(highOption);

    prioritySelect.querySelector(`.${defaultOption.toLowerCase()}`).setAttribute('selected', '');

    return prioritySelect;
}

const createFormButton = (buttonText, buttonId, buttonType, events) => {
    const formBtn = document.createElement('button');
    formBtn.textContent = buttonText;
    formBtn.setAttribute('id', buttonId);
    formBtn.setAttribute('type', buttonType);
    for (const [eventName, eventHandler] of Object.entries(events)) {
        formBtn.addEventListener(eventName, eventHandler);
    }
    return formBtn;
}

const addTodoEvent = (addTodoForm) => {
    // get the id/index of the project in which the todo is going to be created
    const projectId = document.querySelector('.selected').getAttribute('data-project-id');

    addTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(addTodoForm);
        console.log(formData.get('due-date'));
        const todoData = {
            title: formData.get('title'),
            description: formData.get('description'),
            dueDate: formData.get('due-date'),
            priority: formData.get('priority'),
            completed: false,
            projectId: projectId
        };
        
        const todoCreatedEvent = new CustomEvent('todocreated', {
            detail: {
                todoData: todoData
            }
        });
        document.dispatchEvent(todoCreatedEvent);
    });
}

const createAddTodoForm = () => {
    const addTodoForm = document.createElement('form');
    addTodoForm.setAttribute('id', 'add-todo-form');
    addTodoEvent(addTodoForm);

    const [ todoTitleLabel, todoTitleInput ] = createLabelAndInput('Title', 'text', 'title', 'title', true);
    const [ todoDescLabel, todoDescInput ] = createLabelAndInput('Description', 'textarea', 'description', 'description', true);
    const [ todoDueDateLabel, todoDueDateInput ] = createLabelAndInput('Due Date', 'date', 'due-date', 'due-date', true);
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    priorityLabel.setAttribute('for', 'priority');
    const prioritySelect = createPrioritySelect('low');
    
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('add-todo-form-btns-container');

    const addBtn = createFormButton('Add', 'create-todo', 'submit', {});
    const cancelBtn = createFormButton('Cancel', 'cancel-btn', 'button', {
        click: function(e) {
            document.getElementById('add-todo-form').remove();
            document.getElementById('add-todo-btn').style.display = 'block';
        }
    });

    addTodoForm.appendChild(todoTitleLabel);
    addTodoForm.appendChild(todoTitleInput);
    addTodoForm.appendChild(todoDescLabel);
    addTodoForm.appendChild(todoDescInput);
    addTodoForm.appendChild(todoDueDateLabel);
    addTodoForm.appendChild(todoDueDateInput);
    addTodoForm.appendChild(priorityLabel);
    addTodoForm.appendChild(prioritySelect);
    buttonsContainer.appendChild(addBtn);
    buttonsContainer.appendChild(cancelBtn);
    addTodoForm.appendChild(buttonsContainer);

    return addTodoForm;
}

export { createLabelAndInput, createPrioritySelect, createFormButton };
export default createAddTodoForm;