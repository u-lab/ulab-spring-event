<template>
  <v-footer fixed app>
    <small>
      {{ getThisYear }} &copy; 宇都宮大学情報デザインサークル U-lab
    </small>
  </v-footer>
</template>

<script>
export default {
  computed: {
    getThisYear() {
      return new Date().getFullYear()
    }
  }
}
</script>
