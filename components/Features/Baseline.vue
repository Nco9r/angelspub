<template>
  <section class="baseline">
    <div class="wrapper_first slide">
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
      <p>Beer</p>
    </div>
    <div class="wrapper_first slide_2">
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
      <p>Cocktails</p>
    </div>
    <div class="wrapper_first slide_3">
      <p>Wine</p>
      <p>Wine</p>
      <p>Wine</p>
      <p>Wine</p>
      <p>Wine</p>
      <p>Wine</p>
      <p>Wine</p>
      <p>Wine</p>
      <p>Wine</p>
      <p>Wine</p>
      <p>Wine</p>
      <p>Wine</p>
      <p>Wine</p>
      <p>Wine</p>
      <p>Wine</p>
      <p>Wine</p>
      <p>Wine</p>
      <p>Wine</p>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  mounted() {
    gsap.to('.slide', {
      scrollTrigger: {
        trigger: '.slide',
        start: '-10% 110%',
        end: 'top',
        scrub: true,
        toggleActions: 'restart pause reverse pause',
      },
      x: -900,
    }),
      gsap.to('.slide_2', {
        scrollTrigger: {
          trigger: '.slide_2',
          start: '-10% 110%',
          end: 'top',
          scrub: true,
          toggleActions: 'restart pause reverse pause',
        },
        x: 500,
      }),
      gsap.to('.slide_3', {
        scrollTrigger: {
          trigger: '.slide_3',
          start: '-10% 110%',
          end: 'top',
          scrub: true,
          toggleActions: 'restart pause reverse pause',
        },
        x: -300,
      })
  },
}
</script>

<style scoped>
.baseline {
  overflow: hidden;
  margin-top: 180px;
}

.wrapper_first {
  display: flex;
  flex-flow: row nowrap;
  margin-left: 00px;
}
.slide_2 {
  margin-left: -700px;
}

.wrapper_first p {
  -webkit-text-stroke: 1px white;
  font-family: RecoletaBold;
  color: transparent;
  font-size: 50px;
  line-height: 50px;
  text-transform: uppercase;
  margin-left: 7px;
  margin-right: 7px;
  font-weight: 900;
}

@media screen and (min-width: 768px) {
  .baseline {
    margin-top: -70px;
  }

  .wrapper_first p {
    -webkit-text-stroke: 1px white;
    font-family: RecoletaBold;
    color: transparent;
    font-size: 70px;
    line-height: 65px;
    text-transform: uppercase;
    margin-left: 7px;
    margin-right: 7px;
    font-weight: 900;
  }
}

@media screen and (min-width: 1024px) {
  .baseline {
    margin-top: -100px;
  }

  .wrapper_first p {
    -webkit-text-stroke: 1px white;
    font-family: RecoletaBold;
    color: transparent;
    font-size: 70px;
    line-height: 65px;
    text-transform: uppercase;
    margin-left: 7px;
    margin-right: 7px;
    font-weight: 900;
  }
}

@media screen and (min-width: 1200px) {
  .baseline {
    margin-top: -130px;
  }

  .wrapper_first p {
    -webkit-text-stroke: 1px white;
    font-family: RecoletaBold;
    color: transparent;
    font-size: 90px;
    line-height: 85px;
    text-transform: uppercase;
    margin-left: 7px;
    margin-right: 7px;
    font-weight: 900;
  }
}
</style>
