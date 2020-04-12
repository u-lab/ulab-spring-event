<template>
  <div>
    <index-template :events="events" />
  </div>
</template>

<script>
import IndexTemplate from '@/components/templates/IndexTemplate'

export default {
  components: {
    IndexTemplate
  },

  async fetch({ store }) {
    await store.dispatch('events/fetchEvents')
  },

  computed: {
    events() {
      return this.$store.getters['events/events']
    }
  }
}
</script>
