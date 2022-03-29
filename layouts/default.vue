<template>
  <div>
    <the-header />
    <nuxt />
    <Noise />
    <thefooter />
  </div>
</template>

<script>
import Noise from '../components/Default/Noise'
import TheHeader from '../components/Default/TheHeader.vue'
import Thefooter from '../components/Features/Thefooter.vue'

export default {
  components: {
    Noise,
    TheHeader,
    Thefooter,
  },
  data() {
    return {}
  },
  mounted() {},

  methods: {},
}
</script>

<style>
html {
  font-family: 'RobotoMono', Times, serif;
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: var(--green);
  color: var(--white);
  overflow-x: hidden;
  cursor: url('~assets/img/svg/mouse-ap.svg'), auto;
}

body {
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

:root {
  --black: #1e2222;
  --yellow: #c6861e;
  --red: #602b2b;
  --green: #07281f;
  --white: #f8f2e7;
  --input: rgba(247, 247, 247, 0.075);
}

h1,
h2,
h3,
h4,
h5 {
  font-family: RecoletaMedium, 'Times New Roman', Times, serif;
  font-weight: 200;
}

p {
  font-family: RobotoMono, 'Times New Roman', Times, serif;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: var(--white);
}

@font-face {
  font-family: RecoletaBlack;
  src: url('~assets/fonts/Recoleta-Black.otf');
}

@font-face {
  font-family: RecoletaBold;
  src: url('~assets/fonts/Recoleta-SemiBold.otf');
}

@font-face {
  font-family: heart;
  src: url('~assets/fonts/heart.ttf');
}

@font-face {
  font-family: RecoletaMedium;
  src: url('~assets/fonts/Recoleta-Medium.otf');
}

@font-face {
  font-family: RobotoMono;
  src: url('~assets/fonts/RobotoMono.ttf');
}
</style>
