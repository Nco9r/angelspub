<template>
  <div class="hero">
    <div class="hero_block_left">
      <div class="title_hero">
        <h1>
          Bar. <br />
          Restaurant. <br />
          Afterwork. <span class="none">la teste de buch</span>
        </h1>
      </div>
      <div class="content_hero">
        <p>
          Il semblerait qu’un nouveau PUB débarque à
          <span class="yellow">La Teste de Buch</span>
          prochainement! Ne loupez pas l’ouverture, laissez-nous votre email et
          venez ajouter votre bière à l’édifice !
        </p>
        <div class="arrow">
          <img src="~assets/img/svg/arrow.svg" alt="" />
        </div>
      </div>
      <form @submit="submit">
      <div class="input_hero">
        <input type="text" placeholder="unebiere@angels-pub.fr" v-model="form.email" />
        <button>Yeah</button>
      </div>
      </form>
    </div>
    <div class="hero_block_right">
      <div class="img-first">
        <img src="~assets/img/png/ap-min.png" alt="" />
      </div>
      <div class="img-second">
        <img src="~assets/img/png/cocktails.png" alt="" />
      </div>
      <div class="corner">
        <img src="~assets/img/svg/corner.svg" alt="" />
      </div>
      <div class="hand">
        <img src="~assets/img/svg/gum.svg" alt="" />
      </div>

      <div class="tele">
        <img src="~assets/img/svg/tele.svg" alt="" />
      </div>
      <div class="eyes">
        <img src="~assets/img/svg/eyes.svg" alt="" />
      </div>
      <div class="stones">
        <img src="~assets/img/svg/stones.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios' 
export default {
  data() {
    return {
      form: {
        email: ''
      }
    }
  },
  methods:{
        submit(e) {
      e.preventDefault()
      this.$axios
        .post('http://api.angels-pub.fr/subscribe', { ...this.form })
        .then(
          (res) => (
            (this.form = '')
            (this.Sucess = true)
            (this.error = false)
          )
        )
        .catch(e)
    //   this.error = true
    }
    },
}
</script>

<style>
.hero {
  text-align: left;
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  align-items: center;
  width: 100%;
  padding: 0 10px 0 20px;
  justify-content: space-between;
}

.hero_block_left {
  width: 100%;
}

.title_hero h1 {
  line-height: 56px;
  opacity: 0;
  font-size: 52px;
  color: var(--yellow);
  animation: appear .7s;
  animation-fill-mode: forwards;
  animation-delay: 1.6s;
}

@keyframes appear {
 from{
   opacity: 0;
   transform: translateY(5px);
  }
to{
  opacity: 1;
   transform: translateY(0px);
}
}

.none {
  display: none;
}

.yellow {
  color: var(--yellow);
  font-weight: 800;
}

.content_hero {
  padding: 20px 0px 30px 0px;
  position: relative;
}

.content_hero p {
  opacity: 0;
  animation: appear .7s;
  animation-fill-mode: forwards;
  animation-delay: 1.7s;
  font-weight: 300;
  letter-spacing: .5px;
  line-height: 24px;
}

.arrow {
   opacity: 0;
  animation: appear .7s;
  animation-fill-mode: forwards;
  animation-delay: 1.7s;
}

.arrow img {
  width: 45px;
  transform: rotate(40deg);
  position: absolute;
  right: 5%;
  bottom: -10px;
}

.input_hero {
  width: 100%;
  opacity: 0;
  animation: appear .7s;
  animation-fill-mode: forwards;
  animation-delay: 1.8s;
}

.input_hero input {
  padding: 14px 24px;
  outline: none;
  font-family: RobotoMono;
  border: none;
  background-color: var(--input);
  color: var(--white);
  cursor: url('~assets/img/svg/mouse-ap.svg'), auto;
  border-radius: 3px;
}

.input_hero input::placeholder {
  outline: none;
  font-family: RobotoMono;
  border: none;
  opacity: .3;
  font-size: 12px;
  color: var(--white);
  border-radius: 0px;
}

.input_hero button {
  padding: 14px 24px;
  border: none;
  background-color: var(--black);
  cursor: url('~assets/img/svg/mouse-ap.svg'), auto;
  border-radius: 3px;
  color: var(--yellow);
  transition: all 0.5s;
  font-family: RecoletaBold;
}

.input_hero button:hover {
  background-color: var(--yellow);
  color: var(--black);
  cursor: url('~assets/img/svg/mouse-ap.svg'), auto;
  transform: rotate(360deg);
}

.img img {
  width: 100%;
}

.hero_block_right {
  position: relative;
  opacity: 0;
  animation: appear .7s;
  animation-fill-mode: forwards;
  animation-delay: 1.9s;
  margin-top: 30px;
  display: flex;
  overflow-x: hidden;
  margin-left: 15px;
  flex-flow: row nowrap;
}

.img-first img {
  width: 120%;
  margin-top: 30px;
}
.img-second img {
  margin-top: 50px;
  width: 90%;
}

.corner img {
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
}

.hand img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
}

.tele img {
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
}

.eyes img {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px;
}

.stones img {
  position: absolute;
  top: 40%;
  right: 40%;
  width: 120px;
}

@media screen and (min-width: 768px) {
}

@media screen and (min-width: 1024px) {
  .hero_block_left {
    width: 45%;
  }

  .hero_block_right {
    width: 50%;
  }

  .title_hero h1 {
    line-height: 60px;
    font-size: 50px;
    color: var(--yellow);
    margin-bottom: 20px;
  }

  .content_hero p {
    font-weight: 200;
    font-size: 14px;
    line-height: 26px;
  }

  .arrow img {
  width: 45px;
  transform: rotate(60deg);
  position: absolute;
  right: 5%;
  bottom: -15px;
}


.corner img {
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
}

.hand img {
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 60px;
}

.tele img {
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
}

.eyes img {
  position: absolute;
  bottom: 20px;
  right: 10%;
  width: 60px;
}

.stones img {
  position: absolute;
  top: 40%;
  right: 40%;
  width: 120px;
}

  .img-first img {
    width: 100%;
    margin-top: 10px;
    margin-left: 40px;
  }
  .img-second img {
    margin-top: 10px;
    width: 80%;
  }
}

@media screen and (min-width: 1200px) {
  .hero_block_left {
    width: 43%;
    margin-top: 30px;
  }

  .hero_block_right {
    width: 50%;
  }

  .title_hero h1 {
    line-height: 70px;
    font-size: 60px;
    color: var(--yellow);
    margin-bottom: 20px;
  }

  .arrow img {
  width: 45px;
  transform: rotate(60deg);
  position: absolute;
  right: 22%;
  bottom: -15px;
}

  .content_hero p {
    font-weight: 200;
    font-size: 16px;
    line-height: 32px;
  }

  .img-first img {
    width: 100%;
    margin-top: 10px;
    margin-left: 40px;
  }
  .img-second img {
    margin-top: 10px;
    width: 80%;
  }


  .corner img {
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
  }

  .hand img {
    position: absolute;
    bottom: 0;
    left: 50px;
    width: 80px;
  }

  .tele img {
    position: absolute;
    top: 0;
    right: 0;
    width: 120px;
  }

  .eyes img {
    position: absolute;
    bottom: 30px;
    right: 50px;
    width: 80px;
  }

  .stones img {
    position: absolute;
    top: 40%;
    right: 45%;
    width: 160px;
  }
}

@media screen and (min-width: 1440px) {
  .hero_block_left {
    width: 45%;
  }

  .hero_block_right {
    width: 50%;
  }

  .title_hero h1 {
    line-height: 100px;
    font-size: 100px;
    color: var(--yellow);
    margin-bottom: 20px;
  }

    .arrow img {
  width: 65px;
  transform: rotate(60deg);
  position: absolute;
  right: 37%;
  bottom: -45px;
}

  .content_hero p {
    font-weight: 300;
    font-size: 20px;
    width: 650px;
    line-height: 38px;
  }

  .img-first img {
    width: 100%;
    margin-top: 30px;
    margin-left: 40px;
  }
  .img-second img {
    margin-top: 10px;
    width: 80%;
  }

  .corner img {
    position: absolute;
    top: 0;
    left: 0;
    width: 180px;
  }

  .hand img {
    position: absolute;
    bottom: 0;
    left: 50px;
    width: 120px;
  }

  .tele img {
    position: absolute;
    top: 0;
    right: 0;
    width: 180px;
  }

  .eyes img {
    position: absolute;
    bottom: 50px;
    right: 100px;
    width: 160px;
  }

  .stones img {
    position: absolute;
    top: 40%;
    right: 45%;
    width: 220px;
  }
  .input_hero {
    margin-top: 30px;
  }

  .input_hero input {
    padding: 20px 40px;
  }

  .input_hero button {
    padding: 20px 40px;
  }
}
</style>
