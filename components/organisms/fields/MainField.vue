<template>
  <div class="d-flex justify-center">
    <div>
      <main-intro-field />

      <div class="d-flex justify-center">
        <ulab-logo />
      </div>
    </div>
  </div>
</template>

<script>
import MainIntroField from '@/components/molecules/fields/MainIntroField'
import UlabLogo from '@/components/atoms/logo/UlabLogo'

export default {
  components: {
    MainIntroField,
    UlabLogo
  }
}
</script>
