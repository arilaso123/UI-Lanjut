<template>
  <nav class="breadcrumb-nav" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li class="breadcrumb-item">
        <router-link to="/">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span>Beranda</span>
        </router-link>
      </li>

      <li v-for="(item, index) in items" :key="index" class="breadcrumb-item" :class="{ active: index === items.length - 1 }">
        <span class="breadcrumb-separator">/</span>
        
        <!-- Link if not last item -->
        <router-link v-if="item.to && index !== items.length - 1" :to="item.to">
          {{ item.label }}
        </router-link>
        
        <!-- Active current page -->
        <span v-else class="current-crumb">
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<style scoped>
.breadcrumb-nav {
  margin-bottom: 2rem;
  padding: 0.65rem 1rem;
  background: #ffffff;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  display: inline-flex;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  font-size: 0.85rem;
  margin: 0;
  padding: 0;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.breadcrumb-item a {
  color: var(--text-muted);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: color 0.2s ease;
}

.breadcrumb-item a:hover {
  color: var(--primary);
}

.breadcrumb-separator {
  color: var(--text-light);
  font-size: 0.8rem;
}

.current-crumb {
  color: var(--primary);
  font-weight: 700;
}
</style>
