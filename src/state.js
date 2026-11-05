export const state = {
    tasks: [],
    currentUser: ""
};

export function addTask(task) {
    state.tasks.push(task);
}

export function removeTask(id) {
    state.tasks = state.tasks.filter(t => t.id !== id);
}

export function updateTaskStatus(id, newStatus) {
    state.tasks = state.tasks.map(t => {
        if (t.id === id) {
            return { ...t, status: newStatus, selesai: (newStatus === "Selesai") };
        }
        return t;
    });
}