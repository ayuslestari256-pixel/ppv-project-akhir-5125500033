// APP LOGIC & EVENT HANDLERS (script.js)
import { state, addTask, removeTask, updateTaskStatus } from './state.js';
import { renderTugas } from './ui.js';

export function initApp() {
    const loginForm = document.getElementById("loginForm");
    const namaUser = document.getElementById("namaUser");
    const salamNama = document.getElementById("salamNama");
    const mainHeader = document.getElementById("mainHeader");

    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const prioritySelect = document.getElementById("prioritySelect");
    const deadlineInput = document.getElementById("deadlineInput");

    const errorTask = document.getElementById("errorTask");
    const errorPriority = document.getElementById("errorPriority");
    const errorDeadline = document.getElementById("errorDeadline");
    const loadingState = document.getElementById("loadingState");

    // SISTEM NAVIGASI TAB
    const tabButtons = document.querySelectorAll(".tab-btn");
    const viewSections = document.querySelectorAll(".view-section");

    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");

            tabButtons.forEach(btn => {
                btn.classList.remove("aktif");
                btn.style.background = "#f1f5f9";
                btn.style.color = "#475569";
            });
            viewSections.forEach(sec => {
                sec.classList.remove("aktif");
                sec.style.display = "none";
                sec.setAttribute("hidden", "true");
            });

            this.classList.add("aktif");
            this.style.background = "var(--primary)";
            this.style.color = "white";

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("aktif");
                targetSection.style.display = "block";
                targetSection.removeAttribute("hidden");
            }
        });
    });

    // PROSES LOGIN
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const nama = namaUser.value.trim();
            if (nama === "") return;

            state.currentUser = nama;
            salamNama.textContent = nama;

            document.getElementById("view-beranda").style.display = "none";
            document.getElementById("view-beranda").classList.remove("aktif");

            mainHeader.style.display = "flex";

            const viewTugas = document.getElementById("view-tugas");
            viewTugas.style.display = "block";
            viewTugas.removeAttribute("hidden");
            viewTugas.classList.add("aktif");
        });
    }

    // HANDLERS UNTUK RENDER TUGAS
    const taskHandlers = {
        onStatusChange: (id, statusBaru) => {
            updateTaskStatus(id, statusBaru);
            renderTugas(taskHandlers);
        },
        onDelete: (id) => {
            removeTask(id);
            renderTugas(taskHandlers);
        }
    };

    // TAMBAH TUGAS BARU
    if (taskForm) {
        taskForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const judul = taskInput.value.trim();
            const prioritas = prioritySelect.value;
            const deadline = deadlineInput.value;

            let adaError = false;

            if (judul.length < 3) {
                errorTask.textContent = "Nama tugas minimal 3 huruf!";
                adaError = true;
            } else {
                errorTask.textContent = "";
            }

            if (prioritas === "") {
                errorPriority.textContent = "Pilih tingkat prioritas!";
                adaError = true;
            } else {
                errorPriority.textContent = "";
            }

            if (deadline === "") {
                errorDeadline.textContent = "Tanggal deadline wajib diisi!";
                adaError = true;
            } else {
                errorDeadline.textContent = "";
            }

            if (adaError) return;

            loadingState.style.display = "block";

            setTimeout(() => {
                loadingState.style.display = "none";

                const tugasBaru = {
                    id: Date.now(),
                    judul: judul,
                    prioritas: prioritas,
                    deadline: deadline,
                    status: "Belum",
                    selesai: false
                };

                addTask(tugasBaru);
                taskInput.value = "";
                prioritySelect.value = "";
                deadlineInput.value = "";
                renderTugas(taskHandlers);
            }, 400);
        });
    }

    // PEMUTAR MUSIK / GANTI LAGU
    const playlistSelect = document.getElementById("playlist-select");
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');

    if (playlistSelect && audioPlayer && audioSource) {
        playlistSelect.addEventListener("change", function() {
            audioSource.src = this.value;
            audioPlayer.load();
            audioPlayer.play().catch(error => {
                console.log("Autoplay dicegah browser:", error);
            });
        });
    }
}

// Daftarkan fungsi global agar aman dipanggil dari inline HTML onchange
window.gantiLagu = function(selectElement) {
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    if (audioPlayer && audioSource) {
        audioSource.src = selectElement.value;
        audioPlayer.load();
        audioPlayer.play();
    }
};