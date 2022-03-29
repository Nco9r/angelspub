<template>
  <section class="wrapper_restaurant">
    <div class="wrapper_box">
      <div class="wrapper_restaurant_text">
        <div class="title">
          <h2
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-delay="20"
            data-aos-duration="700"
            data-aos-once="true"
          >
            <span>02.</span> Nos plats <br />
            gourmands
          </h2>
          <p
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-delay="40"
            data-aos-duration="700"
            data-aos-once="true"
          >
            A l’Angel’s PUB faites comme bon vous semble. Composez vos plats
            parmi notre sélection de produits. Au menu, slicy de boeuf,
            carpaccio de saumon, crousty de poulet… <strong>Miam Miam</strong>.
          </p>
          <a href="/carte_angels_pub.pdf" target="_blank"
            >Découvrir notre carte</a
          >
          <img src="~assets/img/svg/underline_black.svg" alt="ligne" />
        </div>
      </div>
      <div class="wrapper_restaurant_img">
        <div class="box_img">
          <img src="~assets/img/png/plats.jpg" alt="photo de plats" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default { mixins: [aosMixin] }
</script>

<style scoped>
.wrapper_restaurant {
  background-color: var(--yellow);
  height: 640px;
  margin-top: -60px;
  padding-top: 100px;
}

.title {
  padding: 20px;
}

.title h2 {
  font-family: RecoletaBlack;
  color: var(--black);
  line-height: 32px;
  font-size: 32px;
  margin-bottom: 30px;
}

.title h2 span {
  font-family: RecoletaBlack;
  color: var(--black);
  font-size: 22px;
  margin-right: 10px;
}

.title p {
  line-height: 26px;
  font-size: 16px;
  color: var(--black);

  margin-bottom: 30px;
}

.title a {
  text-decoration: none;
  color: var(--black);
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
}

.title img {
  width: 180px;
}

.wrapper_restaurant_img {
  margin-top: 30px;
  position: relative;
  overflow: hidden;
}

.img_first {
  position: absolute;
  top: -60px;
  width: 70px;
  right: 10px;
  transform: rotate(50deg);
}

.img_second {
  position: absolute;
  bottom: -60px;
  width: 140px;
  left: -40px;
}

.wrapper_restaurant_img .box_img img {
  width: 100%;
  margin-left: 0px;
}

@media screen and (min-width: 1024px) {
  .wrapper_restaurant {
    background-color: var(--yellow);
    height: 900px;
    margin-top: -200px;
    padding-top: 300px;
  }

  .wrapper_box {
    max-width: 900px;
    display: flex;
    padding-top: 200px;
    margin: -200px auto 50px auto;
  }

  .title {
    display: flex;
    flex-flow: column;
  }

  .title h2 {
    font-size: 52px;
    line-height: 52px;
  }
}

@media screen and (min-width: 1200px) {
  .wrapper_restaurant {
    background-color: var(--yellow);
    height: 1100px;
    margin-top: -200px;
    padding-top: 300px;
  }
 .wrapper_restaurant_img {
   width: 50%;
 }
  .wrapper_box {
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    padding-top: 200px;
    align-items: center;
    margin: -200px auto 50px auto;
  }

  .title {
    display: flex;
    flex-flow: column;
  }

  .title h2 {
    font-family: RecoletaBlack;
    color: var(--black);
    font-size: 52px;
    margin-bottom: 50px;

  }

  .title p {
    line-height: 36px;
    font-size: 18px;
    margin-bottom: 30px;
    width: 420px;
  }

  .title a {
    font-size: 18px;
  }


.title img {
  width: 230px;
}
}

@media screen and (min-width: 1440px) {
  .wrapper_restaurant {
    background-color: var(--yellow);
    height: 900px;
    margin-top: -200px;
    padding-top: 300px;
  }

  .wrapper_box {
    max-width: 1350px;
    display: flex;
    padding-top: 200px;
    margin: -200px auto 50px auto;
  }

  .title p {
    width: 500px;
  }

  .title {
    display: flex;
    flex-flow: column;
  }

  .title h2 {
    font-size: 52px;
    line-height: 52px;
  }
}
</style>
