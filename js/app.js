class TodoApp {
    constructor() {
        this.taskForm = document.getElementById('task-form');
        this.taskInput = document.getElementById('task-input');
        this.taskList = document.getElementById('task-list');
        this.emptyState = document.getElementById('empty-state');
        this.pendingCount = document.getElementById('pending-count');
        this.filterButtons = document.querySelectorAll('.filter-btn');

        this.tasks = [];
        this.currentFilter = 'all';

        this.init();
    }

    init() {
        this.loadFromLocalStorage();

        this.taskForm.addEventListener('submit', (e) => this.handleAddTask(e));

        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilterChange(e));
        });

        this.render();
    }

    handleAddTask(e) {
        e.preventDefault();

        const taskText = this.taskInput.value.trim();

        if (taskText === '') {
            this.showInputError();
            return;
        }

        const task = {
            id: Date.now(),
            text: taskText,
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.tasks.push(task);

        this.taskInput.value = '';
        this.taskInput.focus();

        this.saveToLocalStorage();
        this.render();
    }

    handleToggleComplete(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            this.saveToLocalStorage();
            this.render();
        }
    }

    handleDeleteTask(taskId) {
        const confirmed = confirm('¿Estás seguro de que deseas eliminar esta tarea?');

        if (confirmed) {
            this.tasks = this.tasks.filter(t => t.id !== taskId);
            this.saveToLocalStorage();
            this.render();
        }
    }

    handleFilterChange(e) {
        const filterValue = e.target.dataset.filter;
        this.currentFilter = filterValue;

        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        this.render();
    }

    render() {
        this.taskList.innerHTML = '';

        const filteredTasks = this.getFilteredTasks();

        if (this.tasks.length === 0) {
            this.emptyState.classList.remove('hidden');
            this.taskList.classList.add('hidden');
        } else {
            this.emptyState.classList.add('hidden');
            this.taskList.classList.remove('hidden');

            filteredTasks.forEach(task => {
                const taskElement = this.createTaskElement(task);
                this.taskList.appendChild(taskElement);
            });
        }

        this.updateCounter();
    }

    createTaskElement(task) {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.dataset.taskId = task.id;

        if (task.completed) {
            li.classList.add('completed');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.completed;
        checkbox.id = `task-${task.id}`;
        checkbox.addEventListener('change', () => this.handleToggleComplete(task.id));

        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = task.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'task-delete';
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.id = `delete-${task.id}`;
        deleteBtn.addEventListener('click', () => this.handleDeleteTask(task.id));

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);

        return li;
    }

    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'completed':
                return this.tasks.filter(task => task.completed);
            case 'pending':
                return this.tasks.filter(task => !task.completed);
            case 'all':
            default:
                return this.tasks;
        }
    }

    updateCounter() {
        const pendingTasks = this.tasks.filter(task => !task.completed);
        this.pendingCount.textContent = pendingTasks.length;
    }

    saveToLocalStorage() {
        try {
            localStorage.setItem('todoTasks', JSON.stringify(this.tasks));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }

    loadFromLocalStorage() {
        try {
            const savedTasks = localStorage.getItem('todoTasks');
            if (savedTasks) {
                this.tasks = JSON.parse(savedTasks);
            }
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            this.tasks = [];
        }
    }

    showInputError() {
        this.taskInput.style.borderColor = 'var(--color-danger)';
        this.taskInput.placeholder = 'Por favor, escribe una tarea';

        setTimeout(() => {
            this.taskInput.style.borderColor = '';
            this.taskInput.placeholder = '¿Qué necesitas hacer hoy?';
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new TodoApp();
    console.log('✅ TODO List App initialized successfully');
});
