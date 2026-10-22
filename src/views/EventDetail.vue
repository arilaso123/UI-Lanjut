<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useEvents } from '@/composables/useEvents'
import AppButton from '@/components/ui/AppButton.vue'
import AppCard from '@/components/ui/AppCard.vue'

const route = useRoute()
const router = useRouter()
const { getEventById } = useEvents()

const event = computed(() => getEventById(route.params.id))
const alert = window.alert
</script>

<template>
  <div v-if="event" class="event-detail-page">
    <button class="btn-back" @click="router.push('/browse/events')">← Back to Events</button>

    <div class="detail-header">
      <div class="header-tags">
        <span class="event-tag">{{ event.cat }}</span>
        <span v-if="event.done" class="status-tag status-ended">Event Finished</span>
        <span v-else class="status-tag status-live">Open Registration</span>
      </div>
      <h1 class="event-title">{{ event.title }}</h1>
      <div class="meta-info">
        <span class="meta-item">📅 {{ event.date }}</span>
        <span class="meta-item">{{ event.loc }}</span>
        <span class="meta-item">🎟️ Quota: {{ event.quota }} Attendees</span>
      </div>
    </div>

    <div class="detail-content grid-asymmetric">
      <div class="main-content">
        <AppCard class="detail-card">
          <h2>About This Event</h2>
          <p class="description-text">
            {{ event.desc }}
          </p>
        </AppCard>
      </div>

      <div class="detail-sidebar">
        <AppCard class="ticket-card sticky-pane">
          <div class="ticket-header">
            <h3>Attendee Registration</h3>
            <p class="ticket-price">{{ event.price }}</p>
            <p>
              {{
                event.done
                  ? 'This event has concluded. Registrations are no longer accepted.'
                  : 'Secure your seat now before the quota is full.'
              }}
            </p>
          </div>

          <AppButton
            v-if="!event.done"
            variant="primary"
            class="btn-register"
            @click="alert('Registration feature will be available soon!')"
          >
            Register Now
          </AppButton>
          <AppButton v-else variant="secondary" class="btn-register btn-disabled" disabled>
            Registration Closed
          </AppButton>

          <p v-if="!event.done" class="ticket-note">Only {{ event.quota }} seats available!</p>
        </AppCard>
      </div>
    </div>
  </div>

  <div v-else class="not-found-card">
    <div class="not-found-icon">🔍</div>
    <h2>404 - Event Not Found</h2>
    <p>The event you are looking for is unavailable or has been removed by the organizer.</p>
    <AppButton variant="primary" @click="router.push('/browse/events')">
      Back to Event Catalog
    </AppButton>
  </div>
</template>

<style scoped>
.btn-back {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: var(--space-6);
  color: var(--text-muted);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.btn-back:hover {
  color: var(--primary);
}

.detail-header {
  background: var(--bg-light);
  border-radius: var(--space-4);
  border: 1px solid var(--border-color);
  padding: var(--space-12) var(--space-8);
  margin-bottom: var(--space-8);
}

.header-tags {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.event-tag {
  background: rgba(102, 68, 255, 0.1);
  color: var(--primary);
  padding: var(--space-1) var(--space-4);
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.status-tag {
  padding: var(--space-1) var(--space-3);
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
}

.status-live {
  background: rgba(46, 204, 113, 0.15);
  color: #27ae60;
}

.status-ended {
  background: rgba(108, 117, 125, 0.15);
  color: #6c757d;
}

.event-title {
  font-size: 2.8rem;
  margin: var(--space-4) 0;
  line-height: 1.2;
  color: var(--text-main);
}

.meta-info {
  display: flex;
  gap: var(--space-6);
  flex-wrap: wrap;
}

.meta-item {
  color: var(--text-muted);
  font-weight: 500;
  font-size: 1.05rem;
}

/* ASYMMETRICAL GRID */
.grid-asymmetric {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-12);
}

.detail-card {
  padding: var(--space-8);
}

.detail-card h2 {
  margin-bottom: var(--space-4);
  font-size: 1.8rem;
  border-left: 4px solid var(--primary);
  padding-left: var(--space-2);
}

.description-text {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: var(--space-6);
  font-size: 1.1rem;
  white-space: pre-line;
}

/* STICKY SIDEBAR */
.sticky-pane {
  position: sticky;
  top: 100px;
}

.ticket-card {
  padding: var(--space-8);
  text-align: center;
}

.ticket-header h3 {
  font-size: 1.5rem;
  margin-bottom: var(--space-2);
}

.ticket-price {
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: var(--space-2);
}

.ticket-header p {
  color: var(--text-muted);
  margin-bottom: var(--space-6);
  line-height: 1.5;
}

.btn-register {
  width: 100%;
}

.btn-disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.ticket-note {
  margin-top: var(--space-4);
  color: #e63946;
  font-weight: 600;
  font-size: 0.95rem;
}

.not-found-card {
  text-align: center;
  padding: var(--space-12);
  background: white;
  border-radius: var(--space-4);
  border: 1px solid var(--border-color);
  max-width: 600px;
  margin: var(--space-12) auto;
}

.not-found-card h2 {
  margin-bottom: var(--space-2);
  font-size: 1.8rem;
}

.not-found-card p {
  color: var(--text-muted);
  margin-bottom: var(--space-6);
}

.not-found-icon {
  font-size: 3rem;
  margin-bottom: var(--space-4);
}

@media (max-width: 900px) {
  .grid-asymmetric {
    grid-template-columns: 1fr;
  }

  .meta-info {
    flex-direction: column;
    gap: var(--space-2);
  }
}
</style>
