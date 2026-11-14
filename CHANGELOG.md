# Changelog

## [0.4.0] - 2026-11-14
### Ditambahkan
- Integrasi PWA manifest agar aplikasi dapat diinstal sebagai Progressive Web App.
- Modul penyimpanan aman (`src/storage.js`) dengan validasi `localStorage` dan fitur penanganan data rusak.
- Banner peringatan dinamis untuk status penyimpanan lokal.

### Diperbaharui
- Arsitektur kode menggunakan ES Modules secara penuh untuk pemisahan tugas (*separation of concerns*).

## [0.3.0] - 2026-11-06
### Ditambahkan
- Struktur direktori folder `src/` untuk modul JavaScript aplikasi.

## [0.2.0] - 2026-10-28
### Diperbaiki
- Penyesuaian tata letak teks dan *overflow* pada daftar tugas agar responsif di berbagai ukuran layar.

## [0.1.0] - 2026-10-15
### Ditambahkan
- Rilis awal (MVP) BubuList: pemutar musik lokal, daftar tugas harian (*task list*), dan penyimpanan `localStorage`.