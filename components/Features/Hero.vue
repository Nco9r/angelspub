<template>
  <section class="wrapper_hero">
    <div class="box_wrapper_left">
      <h1>
        <div>Bar.</div>
        <div class="stroke">Restaurant.</div>
        <div>Afterwork.</div>
        <div class="laptop">Afterwork.</div>
        <div class="stroke laptop">Restaurant.</div>
        <div class="laptop">Bar.</div>
        <div class="none">la teste de buch</div>
      </h1>
      <img src="~assets/img/svg/eyes.svg" alt="emoji" />
    </div>
    <div class="box_wrapper_right">
      <div class="box_img">
        <img src="~assets/img/png/hero.jpg" alt="salle du pub" />
      </div>
      <div class="box_beer">
        <img src="~assets/img/svg/arrow.svg" alt="fleche" />
        <span>to beer or not to beer</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.none {
  display: none;
}
.wrapper_hero {
  padding: 130px 20px 50px 20px;
  display: flex;
  flex-flow: column;
}

.box_wrapper_left {
  position: relative;
}

.box_wrapper_left h1 {
  color: var(--yellow);
  font-size: 58px;
  line-height: 62px;
  font-family: RecoletaBold;
}

.box_wrapper_left h1 div:nth-child(1) {
  opacity: 0;
  animation: appear 0.6s ease-in-out;
  animation-delay: 2.3s;
  animation-fill-mode: forwards;
}

.box_wrapper_left h1 div:nth-child(2) {
  opacity: 0;
  animation: appear 0.6s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 2.4s;
}

.box_wrapper_left h1 div:nth-child(3) {
  opacity: 0;
  animation: appear 0.6s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 2.5s;
}

.stroke {
  -webkit-text-stroke: 1px var(--yellow);
  color: transparent;
}

.laptop {
  display: none;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.box_wrapper_left img {
  position: absolute;
  top: 10px;
  right: 60px;
  width: 60px;
  opacity: 0;
  animation: appear 0.6s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 2.5s;
}

.box_wrapper_right {
  margin-top: 30px;
  position: relative;
  margin-left: -40px;
}

.box_wrapper_right .box_img img {
  width: 85%;
  animation: appear 0.6s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 2.5s;
  opacity: 0;
}

.box_beer {
  position: absolute;
  right: -100px;
  transform: rotate(90deg);
  top: 180px;
}

.box_beer img {
  transform: rotate(270deg);
  width: 40px;
  animation: appear 0.6s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 2.6s;
  opacity: 0;
  margin-bottom: -20px;
}

.box_beer span {
  font-family: heart;
  font-size: 28px;
  margin-left: 10px;
  animation: appear 0.6s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 2.6s;
  opacity: 0;
  margin-top: -100px;
}

@media screen and (min-width: 768px) {
  .wrapper_hero {
    padding: 130px 0px 50px 0px;
    display: flex;
    max-width: 700px;
    margin: auto;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
  }

  .laptop {
    display: flex;
  }

  .box_wrapper_left h1 div:nth-child(4) {
    opacity: 0;
    animation: appear 0.6s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 2.6s;
  }

  .box_wrapper_left h1 div:nth-child(5) {
    opacity: 0;
    animation: appear 0.6s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 2.7s;
  }

  .box_wrapper_left h1 div:nth-child(6) {
    opacity: 0;
    animation: appear 0.6s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 2.8s;
  }

  .box_wrapper_left h1 {
    color: var(--yellow);
    font-size: 52px;
    line-height: 58px;
    font-family: RecoletaBold;
  }

  .box_wrapper_left {
    width: 40%;
  }
  .box_wrapper_right {
    width: 50%;
  }
}

@media screen and (min-width: 1024px) {
  .wrapper_hero {
    padding: 130px 0px 50px 0px;
    display: flex;
    max-width: 900px;
    margin: auto;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
  }

  .laptop {
    display: flex;
  }

  .box_wrapper_left h1 div:nth-child(4) {
    opacity: 0;
    animation: appear 0.6s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 2.6s;
  }

  .box_wrapper_left h1 div:nth-child(5) {
    opacity: 0;
    animation: appear 0.6s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 2.7s;
  }

  .box_wrapper_left h1 div:nth-child(6) {
    opacity: 0;
    animation: appear 0.6s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 2.8s;
  }

  .box_wrapper_left h1 {
    color: var(--yellow);
    font-size: 72px;
    line-height: 78px;
    font-family: RecoletaBold;
  }

  .box_wrapper_left {
    width: 40%;
  }
  .box_wrapper_right {
    width: 50%;
  }
}

@media screen and (min-width: 1200px) {
  .wrapper_hero {
    padding: 130px 0px 50px 0px;
    display: flex;
    max-width: 1100px;
    margin: auto;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
  }

  .box_wrapper_left h1 {
    color: var(--yellow);
    font-size: 92px;
    line-height: 100px;

    font-family: RecoletaBold;
  }
  .box_wrapper_left img {
    position: absolute;
    top: 10px;
    right: 20px;
    width: 120px;
    opacity: 0;
    animation: appear 0.6s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 2.5s;
  }

  .box_beer span {
    font-family: heart;
    font-size: 42px;
    animation: appear 0.6s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 2.6s;
    opacity: 0;
  }
.box_beer img {

}
}

@media screen and (min-width: 1440px) {
  .wrapper_hero {
    padding: 130px 0px 50px 0px;
    display: flex;
    max-width: 1350px;
    margin: auto;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
  }

  .box_wrapper_left h1 {
    color: var(--yellow);
    font-size: 122px;
    line-height: 128px;
    font-family: RecoletaBold;
  }
}
</style>
