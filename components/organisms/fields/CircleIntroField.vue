<template>
  <div class="text-center">
    <h2 v-text="title" />

    <a v-if="href" :href="href" target="_blank" rel="noopener">
      リンクはこちら
    </a>

    <div>
      <b-text v-if="description" :text="description" />
    </div>
  </div>
</template>

<script>
import BText from '@/components/molecules/text/BText'

export default {
  components: {
    BText
  },

  props: {
    description: {
      type: [String, Array],
      required: false,
      default: undefined
    },

    href: {
      type: String,
      required: false,
      default: undefined
    },

    title: {
      type: String,
      required: true
    }
  }
}
</script>
