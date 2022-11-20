<template lang="pug">
  div
    header-tota
    .content-wrapper
      nuxt
      footer-tota
    <!-- let's try postpone loading fonts -->
    link(
      rel='stylesheet',
      href='https://fonts.googleapis.com/css?family=Alegreya:500,500i,700,800i,900i&display=swap&subset=cyrillic-ext,latin-ext'
    )
    script(async='' 
           defer='' 
           :data-collect-dnt='devEnv'
           :data-hostname='devEnv ? "localhost" : "tota.sk"'
           src='https://scripts.simpleanalyticscdn.com/latest.js')
</template>


<script>
import HeaderTota from '~/components/header-tota.vue'
import FooterTota from '~/components/footer-tota.vue'

export default {
  components: {
    HeaderTota,
    FooterTota,
  },
  computed: {
    devEnv () {
      return process.env.NODE_ENV === "development"
    }
  },
}
</script>

<style lang='scss'>
  .content-wrapper {
    padding-top: $header-height--xs;
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: 100vh;

    @media (min-width: $screen-xs-min) {
      padding-top: $header-height;
    }
  }


  .cc-banner {
    font-family: $font-family--base;
    font-size: $font-size--400;
    line-height: $line-height--500;
  }
</style>
