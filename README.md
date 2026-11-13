# BubuList
Aplikasi pencatat tugas dan musik interaktif berbasis web.

## Fitur Sprint 4
- **Komponen Reusable**: Menggunakan fungsi `createElement` dengan pelindungan `textContent` untuk mencegah XSS.
- **Penyimpanan Aman**: Menggunakan `localStorage` dengan kunci berversi `bubulist:v1` serta penanganan galat `try/catch` dan validasi data rusak (skenario S1–S6).