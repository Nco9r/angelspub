<template>
  <div>
  
    <nuxt/>
    <Noise />
  </div>
</template>

<script>
import Noise from '../components/Default/Noise'


export default {
  
  components: {
    Noise
  
  },
  data() {
    return {}
  },
  mounted() {},

  methods: {}
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
  color:var(--white);
  cursor: url('~assets/img/svg/mouse-ap.svg'), auto;

}



*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

:root {
  --black: #1E2222;
  --yellow: #BA832B;
  --red: #602B2B;
  --green: #07281F;
  --white: #F8F2E7;
  --input: rgba(247, 247, 247, 0.11);
}

h1, h2, h3, h4, h5 {
  font-family: RecoletaMedium, 'Times New Roman', Times, serif;
  font-weight: 200;
}

p {
  font-family: RobotoMono, 'Times New Roman', Times, serif;
  font-weight: 300;
  letter-spacing: .5px;
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
