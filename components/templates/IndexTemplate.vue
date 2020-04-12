<template>
  <div class="outer">
    <div class="inner">
      <main-field class="mb-2" />

      <events-field :events="events" />
    </div>
  </div>
</template>

<script>
import EventsField from '@/components/organisms/fields/EventsField'
import MainField from '@/components/organisms/fields/MainField'

export default {
  components: {
    EventsField,
    MainField
  },

  props: {
    events: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.outer {
  position: relative;
  height: 90vh;
}

.inner {
  position: absolute;
  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}
</style>
