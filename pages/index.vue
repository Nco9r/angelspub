<template>
  <div>
    <div class="open">
      <div class="text">
        <img src="~assets/img/svg/logo.svg" alt="">
      </div>
    </div>
    <div class="layout">
      <logo />
      <hero />
      <thefooter />
    </div>
  </div>
</template>

<script>
import Hero from '../components/Features/Hero.vue'
import Logo from '../components/Features/Logo.vue'
import Thefooter from '../components/Features/Thefooter.vue'

export default {
  components: {
    Hero,
    Logo,
    Thefooter,
  },
}
</script>

<style>
.open {
  position: fixed;
  top: 0;
  background-color: var(--black);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 1000;
  animation: open 0.5s linear;
  animation-delay: 1.3s;
  animation-fill-mode: forwards;
}

@keyframes open {
  from {
    top: 0;
  }
  to {
    top: -100%;
  }
}

.text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: 100vh;
}

.text  img{

margin-left: -20px;

}

.text p {
  text-align: center;
  font-family: RecoletaBold;
  font-size: 25px;
  color: var(--yellow);
}


@media screen and (min-width: 1024px) {
  .layout {
    max-width: 900px;
    margin: 30px auto;
  }
}

@media screen and (min-width: 1200px) {
  .layout {
    max-width: 1200px;
    margin: 30px auto;
  }
}

@media screen and (min-width: 1440px) {
  .layout {
    max-width: 1440px;
    margin: 30px auto;
  }
}

@media screen and (min-width: 1600px) {
  .layout {
    max-width: 1600px;
    margin: 30px auto;
  }
}
</style>
