<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>

    <the-footer />
  </v-app>
</template>

<script>
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheFooter
  }
}
</script>
