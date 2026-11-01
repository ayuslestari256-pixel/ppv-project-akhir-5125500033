# Debug Log - BubuList

Dokumentasi perbaikan bug dan penyesuaian kode pada proyek akhir BubuList.

---

## 1. Perbaikan Duplikat Kode pada `style.css`

* **Gejala / Masalah:** 
  File `style.css` sempat ada duplikat blok kode yang menumpuk di bagian bawah, bikin file jadi kepanjangan dan kurang rapi buat dibaca atau dipelihara ke depannya.
* **Alat DevTools:** 
  VS Code Editor / CSS Syntax Checker
* **Penyebab (Berkas : Baris):** 
  `style.css` (terdapat blok aturan yang ter-copy dua kali secara utuh di bagian bawah file).
* **Solusi Perbaikan:** 
  Membersihkan dan menghapus blok kode duplikat yang menumpuk di bagian bawah sehingga file CSS kembali bersih dan efisien tanpa mengubah tampilan visual antarmuka.
* **Hash Commit:** `4f59114`

---

## 2. Pengujian & Penanganan Validasi Form Kosong (Input Tugas)

* **Gejala / Masalah:** 
  Form tambah tugas berpotensi menerima masukan kosong atau kurang dari batas minimal karakter jika pengguna langsung menekan tombol simpan tanpa mengisi judul tugas[cite: 5].
* **Alat DevTools:** 
  Browser Developer Tools / Form Validation Testing (Layar MVP sekitar 400 px)[cite: 5]
* **Penyebab (Berkas : Baris):** 
  `script.js` (logika validasi pada event listener `taskForm.addEventListener`)[cite: 5].
* **Solusi Perbaikan:** 
  Menerapkan pengecekan kondisi (`if (judul.length < 3)`) yang otomatis menampilkan pesan peringatan berwarna merah (`errorTask`) dan menghentikan proses penyimpanan jika data tidak valid, sehingga data sampah tidak masuk ke dalam daftar tugas[cite: 5].
* **Hash Commit:** `a4315d8`Q