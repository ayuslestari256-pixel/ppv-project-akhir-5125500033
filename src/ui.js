import { state } from './state.js';

export function renderTugas(handlers) {
    const taskList = document.getElementById("taskList");
    const emptyState = document.getElementById("emptyState");
    const angkaStat = document.getElementById("angkaStat");
    const isiProgres = document.getElementById("isiProgres");

    if (!taskList) return;

    taskList.innerHTML = "";
    
    if (state.tasks.length === 0) {
        if (emptyState) emptyState.style.display = "block";
    } else {
        if (emptyState) emptyState.style.display = "none";
        state.tasks.forEach(function(tugas) {
            const li = document.createElement("li");
            li.style.cssText = "background: #f8fafc; padding: 12px 15px; margin-bottom: 10px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;";
            
            let textDecoration = "none";
            let textColor = "#1e293b";
            if (tugas.status === "Selesai") {
                textDecoration = "line-through";
                textColor = "#94a3b8";
            }

            li.innerHTML = `
                <div>
                    <span style="font-weight: 600; text-decoration: ${textDecoration}; color: ${textColor};">${tugas.judul}</span>
                    <div style="font-size: 12px; color: #64748b; margin-top: 4px;">
                        Prioritas: <b>${tugas.prioritas}</b> | Deadline: ${tugas.deadline} | Status: <span style="font-weight: 600; color: ${tugas.status === 'Selesai' ? '#10b981' : (tugas.status === 'On Progress' ? '#f59e0b' : '#64748b')}">${tugas.status || 'Belum'}</span>
                    </div>
                </div>
                <div style="display: flex; gap: 8px; align-items: center;">
                    <select class="status-change-select" data-id="${tugas.id}" style="padding: 5px; font-size: 11px; border-radius: 5px; border: 1px solid #cbd5e1; background: white;">
                        <option value="Belum" ${tugas.status === 'Belum' ? 'selected' : ''}>Belum</option>
                        <option value="On Progress" ${tugas.status === 'On Progress' ? 'selected' : ''}>On Progress</option>
                        <option value="Selesai" ${tugas.status === 'Selesai' ? 'selected' : ''}>Selesai</option>
                    </select>
                    <button class="delete-task-btn" data-id="${tugas.id}" style="padding: 6px 12px; background: #ef4444; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600;">Hapus</button>
                </div>
            `;
            taskList.appendChild(li);
        });

        // Event listener untuk elemen dinamis
        document.querySelectorAll(".status-change-select").forEach(select => {
            select.addEventListener("change", (e) => {
                const id = Number(e.target.getAttribute("data-id"));
                handlers.onStatusChange(id, e.target.value);
            });
        });

        document.querySelectorAll(".delete-task-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = Number(e.target.getAttribute("data-id"));
                handlers.onDelete(id);
            });
        });
    }

    hitungStatistik(angkaStat, isiProgres);
}

function hitungStatistik(angkaStat, isiProgres) {
    const total = state.tasks.length;
    if (total === 0) {
        if (angkaStat) angkaStat.textContent = "0";
        if (isiProgres) isiProgres.style.width = "0%";
        return;
    }

    const selesaiCount = state.tasks.filter(t => t.selesai).length;
    const persen = Math.round((selesaiCount / total) * 100);
    
    if (angkaStat) angkaStat.textContent = persen;
    if (isiProgres) isiProgres.style.width = persen + "%";
}