const STORAGE_KEY = 'bubulist:v1';

export const state = {
    tasks: [],
    currentUser: ""
};

// Fungsi memuat data dengan try/catch dan validasi array
export function muat() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) return [];
        const parsed = JSON.parse(data);
        if (!Array.isArray(parsed)) return [];
        return parsed.filter(item => item && typeof item === 'object' && item.id);
    } catch (error) {
        console.warn("Gagal memuat data dari localStorage, menggunakan data default.", error);
        return [];
    }
}

// Fungsi menyimpan data dengan try/catch
export function simpan(tasks) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error("Gagal menyimpan data ke localStorage (mungkin penuh atau diblokir):", error);
        alert("Peringatan: Perubahan tidak dapat disimpan ke penyimpanan lokal.");
    }
}

export function addTask(task) {
    state.tasks.push(task);
    simpan(state.tasks);
}

export function removeTask(id) {
    state.tasks = state.tasks.filter(t => t.id !== id);
    simpan(state.tasks);
}

export function updateTaskStatus(id, newStatus) {
    state.tasks = state.tasks.map(t => {
        if (t.id === id) {
            return { ...t, status: newStatus, selesai: (newStatus === "Selesai") };
        }
        return t;
    });
    simpan(state.tasks);
}