<template>
  <div>
    <index-template :events="events" :intro="intro" />
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
    await store.dispatch('intro/fetchIntro')
  },

  computed: {
    events() {
      return this.$store.getters['events/events']
    },

    intro() {
      return this.$store.getters['intro/intro']
    }
  }
}
</script>
