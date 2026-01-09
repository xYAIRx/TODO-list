// ===================================
// TODO LIST APPLICATION
// ===================================

class TodoApp {
    constructor() {
        // DOM Elements
        this.taskForm = document.getElementById('task-form');
        this.taskInput = document.getElementById('task-input');
        this.taskList = document.getElementById('task-list');
        this.emptyState = document.getElementById('empty-state');
        this.pendingCount = document.getElementById('pending-count');
        this.filterButtons = document.querySelectorAll('.filter-btn');

        // State
        this.tasks = [];
        this.currentFilter = 'all';

        // Initialize
        this.init();
    }

    init() {
        // Load tasks from localStorage
        this.loadFromLocalStorage();

        // Event Listeners
        this.taskForm.addEventListener('submit', (e) => this.handleAddTask(e));

        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilterChange(e));
        });

        // Initial render
        this.render();
    }

    // ===================================
    // CORE FUNCTIONALITY
    // ===================================

    handleAddTask(e) {
        e.preventDefault();

        const taskText = this.taskInput.value.trim();

        // Validate: no empty tasks
        if (taskText === '') {
            this.showInputError();
            return;
        }

        // Create new task
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false,
            createdAt: new Date().toISOString()
        };

        // Add to tasks array
        this.tasks.push(task);

        // Clear input
        this.taskInput.value = '';
        this.taskInput.focus();

        // Save and render
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
        // Confirmation dialog
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

        // Update active button
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Re-render with new filter
        this.render();
    }

    // ===================================
    // RENDERING
    // ===================================

    render() {
        // Clear task list
        this.taskList.innerHTML = '';

        // Get filtered tasks
        const filteredTasks = this.getFilteredTasks();

        // Show/hide empty state
        if (this.tasks.length === 0) {
            this.emptyState.classList.remove('hidden');
            this.taskList.classList.add('hidden');
        } else {
            this.emptyState.classList.add('hidden');
            this.taskList.classList.remove('hidden');

            // Render tasks
            filteredTasks.forEach(task => {
                const taskElement = this.createTaskElement(task);
                this.taskList.appendChild(taskElement);
            });
        }

        // Update counter
        this.updateCounter();
    }

    createTaskElement(task) {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.dataset.taskId = task.id;

        if (task.completed) {
            li.classList.add('completed');
        }

        // Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.completed;
        checkbox.id = `task-${task.id}`;
        checkbox.addEventListener('change', () => this.handleToggleComplete(task.id));

        // Task text
        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = task.text;

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'task-delete';
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.id = `delete-${task.id}`;
        deleteBtn.addEventListener('click', () => this.handleDeleteTask(task.id));

        // Append elements
        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);

        return li;
    }

    // ===================================
    // FILTERING
    // ===================================

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

    // ===================================
    // COUNTER
    // ===================================

    updateCounter() {
        const pendingTasks = this.tasks.filter(task => !task.completed);
        this.pendingCount.textContent = pendingTasks.length;
    }

    // ===================================
    // LOCAL STORAGE
    // ===================================

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

    // ===================================
    // VALIDATION
    // ===================================

    showInputError() {
        this.taskInput.style.borderColor = 'var(--color-danger)';
        this.taskInput.placeholder = 'Por favor, escribe una tarea';

        setTimeout(() => {
            this.taskInput.style.borderColor = '';
            this.taskInput.placeholder = '¿Qué necesitas hacer hoy?';
        }, 2000);
    }
}

// ===================================
// INITIALIZE APP
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});
