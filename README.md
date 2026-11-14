# BubuList — Project Akhir PPV

Aplikasi web pemutar musik dan daftar tugas (*task list*) interaktif untuk membantu mahasiswa mengorganisasi tugas harian serta menikmati musik secara lokal, lengkap dengan penyimpanan lokal, mode PWA, dan antarmuka yang rapi.

**Pembuat:** Ayu Sri Lestari · NRP 5125500033 · D3 Teknologi Multimedia dan Broadcasting, PENS  
**Mata kuliah:** Praktikum Pemrograman Visual (TB033109) · **Versi:** v0.4.0

<h2>Cara menjalankan</h2>

<p>Aplikasi memakai <b>ES Modules</b>, jadi <b>harus dibuka lewat server lokal</b> (bukan klik dua kali <code>index.html</code>).</p>

<pre><code>python -m http.server 5500    # lalu buka http://127.0.0.1:5500/
# atau: Live Server di VS Code, atau npx vite</code></pre>

<p>Butuh internet untuk memuat Bootstrap dan font dari CDN (tampilan tetap berfungsi tanpa keduanya, hanya gayanya sedikit berbeda).</p>

<h2>Fitur MVP dan statusnya</h2>

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Fitur (Charter)</th>
      <th>Prioritas</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Manajemen daftar tugas (tambah, edit, hapus, centang selesai)</td>
      <td>Must</td>
      <td>Selesai</td>
    </tr>
    <tr>
      <td>Pemutar musik lokal terintegrasi</td>
      <td>Must</td>
      <td>Selesai</td>
    </tr>
    <tr>
      <td>Penyimpanan data lokal via <code>localStorage</code></td>
      <td>Must</td>
      <td>Selesai</td>
    </tr>
    <tr>
      <td>PWA manifest integration (dukungan instalasi aplikasi)</td>
      <td>Should</td>
      <td>Selesai</td>
    </tr>
    <tr>
      <td>Penyimpanan tahan data rusak + peringatan ke pengguna</td>
      <td>Sprint 4</td>
      <td>Selesai</td>
    </tr>
    <tr>
      <td>Login / database cloud</td>
      <td>Won't</td>
      <td>Tidak dikerjakan</td>
    </tr>
  </tbody>
</table>

<h2>Struktur modul</h2>

<pre><code>index.html
src/
  main.js       punca kendali: event form/tombol + logika utama aplikasi
  state.js      pengelola data tugas dan pemutar musik; penghubung storage.js
  storage.js    penyimpanan aman (KUNCI, muat, simpan, peringatan)
  komponen.js   komponen UI reusable (ItemTugas, ItemMusik)
  ui.js         menggambar daftar tugas, pemutar musik, dan banner peringatan</code></pre>

<h2>Kontrak penyimpanan (<code>src/storage.js</code>)</h2>

<ul>
  <li><b>KUNCI:</b> <code>'bubulist:v1'</code>. Naikkan ke <code>:v2</code> bila bentuk data berubah.</li>
  <li><b>muat():</b> Membaca <code>localStorage</code> setiap dipanggil. Tidak pernah melempar. Selalu mengembalikan array data sah; JSON rusak, bukan array, dan item tidak sah disaring.</li>
  <li><b>simpan(data):</b> Menulis JSON ke <code>KUNCI</code> dalam <code>try/catch</code>. Mengembalikan <code>true / false</code>; tidak melempar walau penuh/diblokir.</li>
  <li><b>peringatan():</b> Pesan untuk pengguna (<code>''</code> bila aman), ditampilkan di banner <code>#storageNotice</code>.</li>
</ul>

<h2>Kredit aset dan pustaka</h2>

<ul>
  <li>Bootstrap 5.3.3 via CDN jsDelivr (MIT).</li>
  <li>Font dan ikon pendukung via Google Fonts (SIL OFL).</li>
</ul>