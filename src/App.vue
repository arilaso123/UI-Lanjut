<template>
  <div class="app-shell">
    <!-- Sticky Header Navigation -->
    <AppNavbar />

    <!-- Main Dynamic Route View -->
    <main class="app-content">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Global Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<style>
/* Page transition animation */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(4px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
