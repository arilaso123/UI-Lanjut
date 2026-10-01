# NodeKicks Express - Frontend Jasa Cuci Sepatu Online (Vue.js)

Website frontend modern untuk aplikasi jasa cuci dan restorasi sepatu online **NodeKicks Express**, dibangun menggunakan **Vue 3**, **Vue Router 4**, dan **Modern Vanilla CSS** sesuai dengan spesifikasi tugas kuliah.

---

## 📌 Pemenuhan Ketentuan Tugas

| No | Kriteria Ketentuan | Implementasi dalam Proyek | Bukti File / Rute |
| :---: | :--- | :--- | :--- |
| **1** | **Satu Beranda / Entry Point** | Landing page lengkap dengan Hero section, statistik, diagram alur sitemap, showcase layanan unggulan, testimoni, dan CTA. | [`src/views/HomeView.vue`](file:///c:/Users/Hakam/Documents/KULIAH/Semester%207/VUE%20PROJECT/src/views/HomeView.vue)<br>Route: `/` |
| **2** | **3 - 5 Pages / Destinasi Utama** | Terdapat **4 Destinasi Utama**:<br>1. Katalog Layanan (`/services`)<br>2. Pemesanan Booking (`/order`)<br>3. Pelacakan Status Sepatu (`/tracking`)<br>4. Profil Workshop & FAQ (`/about`) | [`src/router/index.js`](file:///c:/Users/Hakam/Documents/KULIAH/Semester%207/VUE%20PROJECT/src/router/index.js) |
| **3** | **Minimal 1 Hubungan Parent-Child** | Disediakan **2 hubungan Parent-Child** menggunakan nested `<router-view>`:<br>• **Parent Layanan** (`/services`) $\rightarrow$ Child: List (`''`) & Detail (`':id'`)<br>• **Parent Tracking** (`/tracking`) $\rightarrow$ Child: Search (`''`) & Detail (`':orderId'`) | [`src/views/services/ServicesParent.vue`](file:///c:/Users/Hakam/Documents/KULIAH/Semester%207/VUE%20PROJECT/src/views/services/ServicesParent.vue)<br>[`src/views/tracking/TrackingParent.vue`](file:///c:/Users/Hakam/Documents/KULIAH/Semester%207/VUE%20PROJECT/src/views/tracking/TrackingParent.vue) |
| **4** | **Jalur Navigasi Masuk Akal** | Alur pengguna alami dan saling terhubung:<br>• **Eksplorasi $\rightarrow$ Pesan**: Beranda $\rightarrow$ Katalog Layanan $\rightarrow$ Detail Treatment $\rightarrow$ Form Booking (otomatis terisi).<br>• **Pesan $\rightarrow$ Lacak**: Submit Order $\rightarrow$ Terbit Resi $\rightarrow$ Langsung buka timeline pengerjaan sepatu.<br>• Breadcrumb aktif di setiap halaman anak. | [`src/components/common/AppBreadcrumb.vue`](file:///c:/Users/Hakam/Documents/KULIAH/Semester%207/VUE%20PROJECT/src/components/common/AppBreadcrumb.vue)<br>[`src/components/layout/AppNavbar.vue`](file:///c:/Users/Hakam/Documents/KULIAH/Semester%207/VUE%20PROJECT/src/components/layout/AppNavbar.vue) |

---

## 🗺️ Struktur Sitemap & Navigasi

```text
/ (Beranda - Entry Point)
├── /services (Destinasi 1 - PARENT)
│   ├── /services (ServicesList - Child Default)
│   └── /services/:id (ServiceDetail - Dynamic Child: deep-clean, unyellowing, dll.)
├── /order (Destinasi 2 - Form Booking & Kalkulator Biaya)
├── /tracking (Destinasi 3 - PARENT)
│   ├── /tracking (TrackingSearch - Child Default)
│   └── /tracking/:orderId (TrackingDetail - Dynamic Child: SC-8821, SC-9042, dll.)
└── /about (Destinasi 4 - Kisah Workshop, Lokasi, & Accordion FAQ)
```

---

## 🚀 Cara Menjalankan Project

1. **Install dependensi**:
   ```bash
   npm install
   ```

2. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di: `http://localhost:5173/`

3. **Build untuk production**:
   ```bash
   npm run build
   ```

---

## 🛠️ Teknologi yang Digunakan
- **Vue 3** (Composition API, `<script setup>`)
- **Vue Router 4** (Nested Routes, Dynamic Route Matching, Props Passing, Scroll Behavior)
- **Vite 8** (Lightning fast dev server & build tool)
- **Vanilla CSS Modern** (Design System terpusat dengan CSS Variables, Glassmorphism, Micro-animations, Flexbox/CSS Grid responsif)
