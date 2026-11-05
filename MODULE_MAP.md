# Peta Modul (Module Map) - BubuList

Dokumentasi ini menjelaskan arsitektur modular (ES Modules) pada aplikasi BubuList.

## 1. Peta Ketergantungan (Alur Impor Satu Arah)
Alur impor antar-modul bersifat satu arah (tidak ada *circular dependency*) dengan struktur sebagai berikut:
* `index.html` ➔ mengimpor ➔ `src/main.js`
* `src/main.js` ➔ mengimpor ➔ `src/script.js`
* `src/script.js` ➔ mengimpor ➔ `src/state.js` & `src/ui.js`
* `src/ui.js` ➔ mengimpor ➔ `src/state.js`

## 2. Tanggung Jawab Modul
* **`main.js`**: Titik masuk utama (*entry point*) aplikasi yang memicu inisialisasi setelah DOM dimuat.
* **`script.js`**: Mengelola *event listener* utama, navigasi tab, proses login/salam pengguna, validasi form tugas, dan kontrol pemutar musik.
* **`state.js`**: Bertindak sebagai pusat penyimpanan data (*state management*) untuk daftar tugas dan informasi pengguna aktif.
* **`ui.js`**: Bertanggung jawab penuh atas manipulasi DOM untuk merender daftar tugas ke antarmuka dan menghitung persentase statistik progres.
* **`ui-pustaka.js`**: Menyediakan fungsi *helper* bantu untuk pembuatan elemen DOM secara dinamis.

## 3. Bagian yang Belum Dimodulkan & Alasannya
* **`style.css`**: Belum dipecah menjadi modul-modul kecil karena skala aplikasi masih tergolong sederhana, sehingga pengelolaan gaya dalam satu file terpusat jauh lebih efisien dan mudah dirawat.
* **Eksternal Bootstrap 5.3.3**: Menggunakan pustaka pihak ketiga melalui CDN untuk menjaga konsistensi desain UI responsif tanpa perlu menulis ulang pustaka dasar dari awal.