<template>
  <div class="d-flex justify-center">
    <div class="event-box">
      <h3 class="text-center mb-1 my-content" v-text="content" />
      <p class="text-center mr-2 mb-1">
        <time :datetime="date" v-text="formatDate" />
      </p>

      <div class="text-center">
        <a v-if="href" :href="href">リンクはこちら</a>
        <p v-else class="mb-0">リンクは準備中です</p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/utils/date'

export default {
  props: {
    date: {
      type: Date,
      required: false,
      default: undefined
    },

    content: {
      type: String,
      required: true
    },

    href: {
      type: String,
      default: undefined
    }
  },

  computed: {
    formatDate() {
      return this.date
        ? formatDate(this.date, 'yyyy年MM月dd日 HH:mm~')
        : undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.event-box {
  width: 300px;
  border-bottom: 1px solid #222;
}

.my-content {
  font-size: 1.1rem;
}
</style>
