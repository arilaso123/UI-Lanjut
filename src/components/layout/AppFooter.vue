<template>
  <footer class="footer-wrapper">
    <div class="container footer-container">
      <!-- Col 1: Brand & Bio -->
      <div class="footer-col brand-col">
        <router-link to="/" class="footer-logo">
          <div class="logo-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M2 17a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-3a2 2 0 0 0-2-2h-3l-3-4H8a4 4 0 0 0-4 4v5z"></path>
              <circle cx="7" cy="17" r="2"></circle>
              <circle cx="17" cy="17" r="2"></circle>
            </svg>
          </div>
          <span class="brand-name">Node<strong>Kicks</strong> Express</span>
        </router-link>
        <p class="footer-bio">
          Jasa pembersihan, restorasi warna, unyellowing, dan reparasi sol sepatu online profesional. Solusi sepatu bersih higienis dengan layanan pickup & delivery langsung ke rumah Anda.
        </p>
        <div class="trust-badge">
          <span class="check-icon">✓</span>
          <span>100% Garansi Cuci Ulang Jika Belum Bersih</span>
        </div>
      </div>

      <!-- Col 2: Sitemap Destinasi Utama -->
      <div class="footer-col">
        <h4 class="footer-title">Navigasi Utama</h4>
        <ul class="footer-links">
          <li><router-link to="/">🏠 Beranda</router-link></li>
          <li><router-link to="/services">📦 Katalog Layanan</router-link></li>
          <li><router-link to="/order">📝 Booking Penjemputan</router-link></li>
          <li><router-link to="/tracking">🔍 Cek Status Resi</router-link></li>
          <li><router-link to="/about">ℹ️ Profil & Lokasi Workshop</router-link></li>
        </ul>
      </div>

      <!-- Col 3: Parent-Child Services Links -->
      <div class="footer-col">
        <h4 class="footer-title">Pilihan Treatment</h4>
        <ul class="footer-links">
          <li><router-link to="/services/deep-clean">Deep Clean Treatment</router-link></li>
          <li><router-link to="/services/fast-clean">Fast Clean (24 Jam)</router-link></li>
          <li><router-link to="/services/unyellowing">Unyellowing Midsole</router-link></li>
          <li><router-link to="/services/leather-care">Leather & Suede Care</router-link></li>
          <li><router-link to="/services/repaint-custom">Repaint & Restoration</router-link></li>
          <li><router-link to="/services/sol-repair">Reglue / Sol Repair</router-link></li>
        </ul>
      </div>

      <!-- Col 4: Jam Operasional & Kontak -->
      <div class="footer-col">
        <h4 class="footer-title">Workshop & Hubungi</h4>
        <ul class="footer-contact">
          <li>
            <span class="icon">📍</span>
            <span>Jl. Pandanaran No. 12, Pleburan, Semarang</span>
          </li>
          <li>
            <span class="icon">⏰</span>
            <span>Senin - Sabtu: 09:00 - 20:00 WIB<br/>Minggu: 10:00 - 17:00 WIB</span>
          </li>
          <li>
            <span class="icon">💬</span>
            <span>WhatsApp: 087873844044</span>
          </li>
          <li>
            <span class="icon">📸</span>
            <span>@nodekicks.care</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>© 2026 NodeKicks Express. Hak Cipta Dilindungi. Tugas Frontend Vue.js Sitemap.</p>
        <div class="sitemap-tag">
          <span>Struktur Sitemap: 1 Home + 4 Destinasi Utama + Nested Child Routes</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-wrapper {
  background: var(--bg-page);
  color: var(--text-muted);
  margin-top: auto;
  border-top: 1px solid var(--border-color);
}

.footer-container {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.1fr 1.2fr;
  gap: 2.5rem;
  padding-top: 4rem;
  padding-bottom: 3.5rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
  margin-bottom: 1.25rem;
}

.logo-icon-box {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  background: var(--accent-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #070d1e;
}

.brand-name {
  color: var(--text-main);
  font-size: 1.15rem;
  font-weight: 700;
}

.brand-name strong {
  color: var(--primary);
}

.footer-bio {
  font-size: 0.88rem;
  line-height: 1.65;
  margin-bottom: 1.25rem;
  color: var(--text-muted);
}

.trust-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--success-light);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 0.4rem 0.8rem;
  border-radius: var(--radius-sm);
  font-size: 0.78rem;
  color: #34d399;
}

.check-icon {
  font-weight: bold;
}

.footer-title {
  color: var(--text-heading);
  font-size: 1rem;
  margin-bottom: 1.25rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 28px;
  height: 2px;
  background: var(--accent-gradient);
  border-radius: 2px;
}

.footer-links, .footer-contact {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  font-size: 0.88rem;
}

.footer-links a {
  color: var(--text-muted);
  text-decoration: none;
  transition: all 0.25s var(--ease-smooth);
  display: inline-flex;
  align-items: center;
}

.footer-links a:hover {
  color: var(--primary);
  transform: translateX(4px);
}

.footer-contact li {
  display: flex;
  gap: 0.65rem;
  align-items: flex-start;
  line-height: 1.5;
}

.footer-contact .icon {
  font-size: 1rem;
}

.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding: 1.25rem 0;
  font-size: 0.82rem;
  background: var(--bg-deep);
}

.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.sitemap-tag {
  color: var(--primary);
  font-size: 0.75rem;
  background: var(--primary-light);
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
}

@media (max-width: 992px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 600px) {
  .footer-container {
    grid-template-columns: 1fr;
  }
  .footer-bottom-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
