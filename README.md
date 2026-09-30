# Portofolio — Alex Pratama (Contoh)

Website portofolio statis (HTML, CSS, JS murni — tanpa framework/build tool),
tema hitam elegan dengan aksen emas. Siap dibuka di VS Code dan di-hosting
langsung di GitHub Pages.

## Struktur folder

```
portfolio/
├── index.html          → semua konten & teks halaman
├── css/style.css        → semua styling & warna
├── js/script.js         → menu mobile, efek scroll, dll
├── assets/images/       → taruh foto profil & favicon di sini
└── README.md
```

## 1. Menjalankan di VS Code (Live Server)

1. Buka folder `portfolio` ini di VS Code (**File → Open Folder**).
2. Install ekstensi **Live Server** oleh Ritwick Dey (buka tab Extensions,
   cari "Live Server", klik Install) — kalau belum ada.
3. Klik kanan pada `index.html` → **Open with Live Server**.
   Atau klik tombol **"Go Live"** di pojok kanan bawah VS Code.
4. Browser otomatis terbuka di `http://127.0.0.1:5500` dan akan reload
   otomatis setiap kali Anda menyimpan perubahan.

## 2. Bagian yang perlu Anda edit

Semua teks contoh (nama, bio, skill, project, kontak) ada langsung di
`index.html` — tinggal cari dan ganti, tidak perlu ubah struktur HTML-nya:

- **Nama & judul** → tag `<title>` dan bagian `.hero`
- **Foto profil** → taruh file gambar di `assets/images/profile.jpg`
  (nama file harus sama persis, atau ubah path-nya di HTML)
- **Favicon** → taruh `favicon.png` di `assets/images/`
- **Tentang saya** → section `id="about"`
- **Skill** → section `id="skills"`
- **Project** → section `id="work"` (ganti judul, deskripsi, tag teknologi,
  dan link `href="#"` dengan link GitHub/demo asli Anda)
- **Pengalaman kerja** → section `id="experience"`
- **Email & sosial media** → section `id="contact"`

Warna aksen emas bisa diganti di `css/style.css`, cari variabel
`--color-accent` di bagian paling atas file.

## 3. Hosting gratis di GitHub Pages

1. Buat repository baru di GitHub, misalnya `portofolio`.
2. Di terminal, dari dalam folder `portfolio`:
   ```bash
   git init
   git add .
   git commit -m "Portofolio pertama saya"
   git branch -M main
   git remote add origin https://github.com/USERNAME/portofolio.git
   git push -u origin main
   ```
3. Di GitHub, buka repo → **Settings → Pages**.
4. Pada **Source**, pilih branch `main` dan folder `/ (root)`, lalu **Save**.
5. Tunggu 1–2 menit, situs akan aktif di:
   `https://USERNAME.github.io/portofolio/`

Setiap kali Anda `git push` perubahan baru, GitHub Pages akan otomatis
memperbarui situsnya dalam beberapa menit.

## Catatan teknis

- Tidak ada dependensi/build step — murni HTML/CSS/JS, jadi kompatibel
  langsung dengan GitHub Pages tanpa konfigurasi tambahan.
- Font diambil dari Google Fonts (butuh koneksi internet saat halaman dibuka).
- Form kontak sengaja tidak dibuat karena situs statis tidak punya server —
  tombol email memakai `mailto:` langsung. Kalau nanti mau form sungguhan,
  bisa pakai layanan seperti Formspree atau Getform.
