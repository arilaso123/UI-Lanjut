<template>
  <header class="navbar-wrapper" :class="{ scrolled: isScrolled }">
    <div class="container navbar-container">
      <!-- Brand Logo -->
      <router-link to="/" class="brand-logo" @click="closeMobileMenu">
        <div class="logo-icon-box">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 17a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-3a2 2 0 0 0-2-2h-3l-3-4H8a4 4 0 0 0-4 4v5z"></path>
            <circle cx="7" cy="17" r="2"></circle>
            <circle cx="17" cy="17" r="2"></circle>
          </svg>
        </div>
        <div class="brand-text">
          <span class="brand-name">Node<strong>Kicks</strong></span>
          <span class="brand-badge">Express</span>
        </div>
      </router-link>

      <!-- Desktop Navigation Menu -->
      <nav class="nav-menu" :class="{ 'nav-open': isMobileOpen }">
        <router-link to="/" class="nav-link" @click="closeMobileMenu" exact-active-class="active">
          Beranda
        </router-link>
        <router-link to="/services" class="nav-link" @click="closeMobileMenu" active-class="active">
          Layanan
          <span class="nav-pill">6</span>
        </router-link>
        <router-link to="/order" class="nav-link" @click="closeMobileMenu" active-class="active">
          Pemesanan
        </router-link>
        <router-link to="/tracking" class="nav-link" @click="closeMobileMenu" active-class="active">
          Lacak Sepatu
        </router-link>
        <router-link to="/about" class="nav-link" @click="closeMobileMenu" active-class="active">
          Tentang Kami
        </router-link>

        <div class="mobile-cta-wrapper">
          <router-link to="/order" class="btn btn-primary btn-sm" @click="closeMobileMenu">
            ⚡ Pesan Cuci Sekarang
          </router-link>
        </div>
      </nav>

      <!-- Right Action CTA (Desktop) -->
      <div class="navbar-actions">
        <router-link to="/order" class="btn btn-primary btn-sm nav-cta">
          <span>⚡ Booking Pickup</span>
        </router-link>
        
        <!-- Mobile Menu Toggle Button -->
        <button 
          class="mobile-toggle" 
          @click="toggleMobileMenu" 
          aria-label="Toggle Navigation Menu"
        >
          <span class="bar" :class="{ 'bar-1': isMobileOpen }"></span>
          <span class="bar" :class="{ 'bar-2': isMobileOpen }"></span>
          <span class="bar" :class="{ 'bar-3': isMobileOpen }"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileOpen = ref(false)
const isScrolled = ref(false)

const toggleMobileMenu = () => {
  isMobileOpen.value = !isMobileOpen.value
}

const closeMobileMenu = () => {
  isMobileOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  background: rgba(6, 11, 23, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(56, 189, 248, 0.06);
  z-index: 1000;
  display: flex;
  align-items: center;
  transition: all 0.35s var(--ease-smooth);
}

.navbar-wrapper.scrolled {
  background: rgba(6, 11, 23, 0.92);
  border-bottom-color: rgba(56, 189, 248, 0.12);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Brand Logo */
.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
}

.logo-icon-box {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--accent-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #070d1e;
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
  transition: transform 0.3s var(--ease-spring);
}

.brand-logo:hover .logo-icon-box {
  transform: rotate(-8deg) scale(1.05);
}

.brand-text {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.brand-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-main);
  letter-spacing: -0.02em;
}

.brand-name strong {
  color: var(--primary);
  font-weight: 800;
}

.brand-badge {
  font-size: 0.6rem;
  font-weight: 700;
  padding: 0.15rem 0.45rem;
  background: var(--primary-light);
  color: var(--primary);
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* Navigation Links */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-muted);
  text-decoration: none;
  padding: 0.5rem 0.8rem;
  border-radius: var(--radius-sm);
  position: relative;
  transition: all 0.2s var(--ease-smooth);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.nav-link:hover {
  color: var(--text-main);
  background: rgba(56, 189, 248, 0.06);
}

.nav-link.active {
  color: var(--primary);
  background: var(--primary-light);
}

.nav-pill {
  font-size: 0.6rem;
  padding: 0.1rem 0.4rem;
  border-radius: var(--radius-full);
  background: var(--bg-surface-alt);
  color: var(--text-light);
  font-weight: 700;
  min-width: 18px;
  text-align: center;
}

.nav-link.active .nav-pill {
  background: rgba(56, 189, 248, 0.2);
  color: var(--primary);
}

.mobile-cta-wrapper {
  display: none;
}

/* Actions & Mobile Toggle */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.mobile-toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  flex-direction: column;
  gap: 5px;
  z-index: 1100;
}

.bar {
  width: 22px;
  height: 2px;
  background-color: var(--text-main);
  transition: all 0.3s var(--ease-spring);
  border-radius: 2px;
}

/* Responsive Mobile Navigation */
@media (max-width: 900px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-cta {
    display: none;
  }

  .nav-menu {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    right: 0;
    background: rgba(6, 11, 23, 0.98);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 2rem 2.5rem;
    gap: 0.5rem;
    border-bottom: 1px solid var(--border-color);
    box-shadow: var(--shadow-xl);
    transform: translateY(-120%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.35s var(--ease-spring);
  }

  .nav-menu.nav-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-link {
    font-size: 1.05rem;
    width: 100%;
    padding: 0.7rem 0.75rem;
    border-radius: var(--radius-md);
  }

  .mobile-cta-wrapper {
    display: block;
    width: 100%;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);
  }

  .mobile-cta-wrapper .btn {
    width: 100%;
  }

  /* Hamburger transformation */
  .bar-1 {
    transform: rotate(45deg) translate(5px, 5px);
  }
  .bar-2 {
    opacity: 0;
  }
  .bar-3 {
    transform: rotate(-45deg) translate(5px, -5px);
  }
}
</style>
