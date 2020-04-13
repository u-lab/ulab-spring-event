<template>
  <div>
    <template v-if="isArray">
      <p v-for="(t, key) in text" :key="key" v-text="t" />
    </template>

    <p v-else class="mb-0" v-text="text" />
  </div>
</template>

<script>
import { isArray } from '@/utils//array'

export default {
  props: {
    text: {
      type: [String, Array],
      required: true
    }
  },

  computed: {
    isArray() {
      return isArray(this.text)
    }
  }
}
</script>
