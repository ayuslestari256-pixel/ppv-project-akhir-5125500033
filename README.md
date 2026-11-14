Markdown# BubuList — Project Akhir PPV

Aplikasi web pemutar musik dan daftar tugas (*task list*) interaktif untuk membantu mahasiswa mengorganisasi tugas harian serta menikmati musik secara lokal, lengkap dengan penyimpanan lokal, mode PWA, dan antarmuka yang rapi.

**Pembuat:** Ayu Sri Lestari · NRP 5125500033 · D3 Teknologi Multimedia dan Broadcasting, PENS  
**Mata kuliah:** Praktikum Pemrograman Visual (TB033109) · **Versi:** v0.4.0

## Cara menjalankan

Aplikasi memakai **ES Modules**, jadi **harus dibuka lewat server lokal** (bukan klik dua kali `index.html`).

```bash
python -m http.server 5500    # lalu buka [http://127.0.0.1:5500/](http://127.0.0.1:5500/)
# atau: Live Server di VS Code, atau npx vite
Butuh internet untuk memuat Bootstrap dan font dari CDN (tampilan tetap berfungsi tanpa keduanya, hanya gayanya sedikit berbeda).Fitur MVP dan statusnyaFitur (Charter)PrioritasStatusManajemen daftar tugas (tambah, edit, hapus, centang selesai)MustSelesaiPemutar musik lokal terintegrasiMustSelesaiPenyimpanan data lokal via localStorageMustSelesaiPWA manifest integration (dukungan instalasi aplikasi)ShouldSelesaiPenyimpanan tahan data rusak + peringatan ke penggunaSprint 4SelesaiLogin / database cloudWon'tTidak dikerjakanStruktur modulPlaintextindex.html
src/
  main.js       punca kendali: event form/tombol + logika utama aplikasi
  state.js      pengelola data tugas dan pemutar musik; penghubung storage.js
  storage.js    penyimpanan aman (KUNCI, muat, simpan, peringatan)
  komponen.js   komponen UI reusable (ItemTugas, ItemMusik)
  ui.js         menggambar daftar tugas, pemutar musik, dan banner peringatan
Kontrak penyimpanan (src/storage.js)KUNCI: 'bubulist:v1'. Naikkan ke :v2 bila bentuk data berubah.muat(): Membaca localStorage setiap dipanggil. Tidak pernah melempar. Selalu mengembalikan array data sah; JSON rusak, bukan array, dan item tidak sah disaring.simpan(data): Menulis JSON ke KUNCI dalam try/catch. Mengembalikan true / false; tidak melempar walau penuh/diblokir.peringatan(): Pesan untuk pengguna ('' bila aman), ditampilkan di banner #storageNotice.Kredit aset dan pustakaBootstrap 5.3.3 via CDN jsDelivr (MIT).Font dan ikon pendukung via Google Fonts (SIL OFL).