# BubuList — Project Akhir PPV

Aplikasi web pemutar musik dan daftar tugas (*task list*) interaktif untuk membantu mahasiswa mengorganisasi tugas harian serta menikmati musik secara lokal, lengkap dengan penyimpanan lokal, mode PWA, dan antarmuka yang rapi.

**Pembuat:** Ayu Sri Lestari · NRP 5125500033 · D3 Teknologi Multimedia dan Broadcasting, PENS  
**Mata kuliah:** Praktikum Pemrograman Visual (TB033109) · **Versi:** v0.4.0

## Cara menjalankan

Aplikasi memakai **ES Modules**, jadi **harus dibuka lewat server lokal** (bukan klik dua kali `index.html`).

```bash
python -m http.server 5500    # lalu buka [http://127.0.0.1:5500/](http://127.0.0.1:5500/)
# atau: Live Server di VS Code, atau npx vite

## Fitur MVP dan statusnya

| Fitur (Charter) | Prioritas | Status |
| :--- | :--- | :--- |
| Manajemen daftar tugas (tambah, edit, hapus, centang selesai) | Must | Selesai |
| Pemutar musik lokal terintegrasi | Must | Selesai |
| Penyimpanan data lokal via `localStorage` | Must | Selesai |
| PWA manifest integration (dukungan instalasi aplikasi) | Should | Selesai |
| Penyimpanan tahan data rusak + peringatan ke pengguna | Sprint 4 | Selesai |
| Login / database cloud | Won't | Tidak dikerjakan |

## Struktur modul

```text
index.html
src/
  main.js       punca kendali: event form/tombol + logika utama aplikasi
  state.js      pengelola data tugas dan pemutar musik; penghubung storage.js
  storage.js    penyimpanan aman (KUNCI, muat, simpan, peringatan)
  komponen.js   komponen UI reusable (ItemTugas, ItemMusik)
  ui.js         menggambar daftar tugas, pemutar musik, dan banner peringatan

  ## Kontrak penyimpanan (`src/storage.js`)

* **KUNCI:** `'bubulist:v1'`. Naikkan ke `:v2` bila bentuk data berubah.
* **muat():** Membaca `localStorage` setiap dipanggil. Tidak pernah melempar. Selalu mengembalikan array data sah; JSON rusak, bukan array, dan item tidak sah disaring.
* **simpan(data):** Menulis JSON ke `KUNCI` dalam `try/catch`. Mengembalikan `true / false`; tidak melempar walau penuh/diblokir.
* **peringatan():** Pesan untuk pengguna (`` bila aman), ditampilkan di banner `#storageNotice`.

## Kredit aset dan pustaka

* Bootstrap 5.3.3 via CDN jsDelivr (MIT).
* Font dan ikon pendukung via Google Fonts (SIL OFL).