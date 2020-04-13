<template>
  <div>
    <div v-for="(event, key) in events" :key="key">
      <event-list
        :content="event.title"
        :date="convertToDate(event.date)"
        :description="event.description"
        :href="event.link"
      />
    </div>
  </div>
</template>

<script>
import { convertToDate } from '@/utils/date'
import EventList from '@/components/molecules/lists/EventList'

export default {
  components: {
    EventList
  },

  props: {
    events: {
      type: Array,
      required: false,
      default: undefined
    }
  },

  computed: {
    convertToDate() {
      return (date) => convertToDate(date)
    }
  }
}
</script>
