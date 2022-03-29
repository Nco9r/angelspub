<template>
  <div>
    <div class="loading">
      <div class="baseline_load">
        <div class="img">
          <img class="img_2" src="~/assets/img/svg/corner.svg" alt="" />
          <img class="img_1" src="~/assets/img/svg/gum.svg" alt="" />
          <img class="img_3" src="~/assets/img/svg/eyes.svg" alt="" />
          <img class="img_4" src="~/assets/img/svg/mouse-ap.svg" alt="" />
          <img class="logo" src="~/assets/img/svg/logo.svg" alt="" />
        </div>
        <p>The place to beer !</p>
      </div>
    </div>
    <main>
      <hero />
      <afterwork />
      <restaurant />
      <baseline />
      <events />
      <resa />
    </main>
  </div>
</template>

<script>
import Afterwork from '../components/Features/Afterwork.vue'
import Baseline from '../components/Features/Baseline.vue'
import Events from '../components/Features/Events.vue'
import Hero from '../components/Features/Hero.vue'
import Resa from '../components/Features/Resa.vue'
import Restaurant from '../components/Features/Restaurant.vue'
import aosMixin from '~/mixins/aos'

export default {
  mixins: [aosMixin],
  components: {
    Hero,
    Afterwork,
    Restaurant,
    Baseline,
    Events,
    Resa,
  },
}
</script>

<style>
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: var(--black);
  right: 0;
  z-index: 20;
  animation: load 0.7s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 2s;
}

.img {
  position: relative;
}

.logo {
  width: 200px;
  z-index: 10;
}

.img_2 {
  position: absolute;
  top: -40px;
  width: 80px;
}

.img_4 {
  position: absolute;
  top: -25px;
  width: 60px;
  right: -30px;
}

.img_3 {
  position: absolute;
  bottom: 0;
  right: -40px;
  width: 50px;
}

.img_1 {
  position: absolute;
  bottom: -20px;
  left: -40px;
  width: 60px;
}

.baseline_load {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
}

.baseline_load p {
  font-family: heart;
  font-size: 32px;
  margin-top: 80px;
}

@keyframes load {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}
</style>
