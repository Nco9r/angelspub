<template>
  <section class="wrapper_events">
    <div class="wrapper_events_text">
      <div class="title">
        <h2
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="20"
          data-aos-duration="700"
          data-aos-once="true"
        >
          <span>03.</span>Événements
        </h2>
        <p
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="40"
          data-aos-duration="700"
          data-aos-once="true"
        >
          A l'Angels PUB, nous retransmettons événements sportifs et musicaux
          grâce à nos 2 écrans géants ! Pour ceux qui préfèrent être au grand
          air, profitez de notre terrasse ensoleillée et détendez vous autour
          d'une pinte.
        </p>
        <a href="/carte_angels_pub.pdf" target="_blank"
          >Découvrir notre carte</a
        >
        <img src="~assets/img/svg/underline.svg" alt="ligne" />
      </div>
    </div>
    <div class="wrapper_events_img">
      <div class="box_img">
        <img src="~assets/img/png/terasse.jpg" alt="photo de la terrasse" />
      </div>
    </div>
  </section>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default { mixins: [aosMixin] }
</script>

<style scoped>
.wrapper_events {
  margin-top: 50px;
}

.title {
  padding: 20px;
  display: flex;
  flex-flow: column;
}

.title h2 {
  font-size: 32px;
  margin-bottom: 30px;
  color: white;
  font-family: RecoletaBlack;
}

.title h2 span {
  font-family: RecoletaBlack;
  color: var(--yellow);
  font-size: 22px;
  margin-right: 10px;
}

.title p {
  line-height: 26px;
  font-size: 16px;
  margin-bottom: 30px;
}

.title a {
  text-decoration: none;
  color: var(--yellow);
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
}

.title img {
  width: 180px;
}

.box_img img {
  width: 100%;
}

@media screen and (min-width: 768px) {
  .wrapper_events {
    max-width: 900px;
    margin: 100px auto;
    display: flex;
    flex-flow: row-reverse;
    align-items: center;
    justify-content: space-between;
  }

  .wrapper_events_text {
    width: 50%;
  }
  .wrapper_events_img {
    width: 45%;
  }
  .title {
    display: flex;
    flex-flow: column;
  }
  .title p {
    width: 350px;
  }

  .title h2 {
    font-size: 52px;
  }
}
@media screen and (min-width: 1024px) {
  .wrapper_events {
    max-width: 900px;
    margin: 100px auto;
    display: flex;
    flex-flow: row-reverse;
    align-items: center;
    justify-content: space-between;
  }

  .wrapper_events_text {
    width: 50%;
  }
  .wrapper_events_img {
    width: 45%;
  }
  .title {
    display: flex;
    flex-flow: column;
  }
  .title p {
    width: 400px;
  }

  .title h2 {
    font-size: 52px;
  }
}

@media screen and (min-width: 1200px) {
  .wrapper_events {
    max-width: 1100px;
    margin: 100px auto;
    display: flex;
    flex-flow: row-reverse;
    align-items: center;
    justify-content: space-between;
  }

  .wrapper_events_text {
    width: 50%;
  }
  .wrapper_events_img {
    width: 45%;
  }
  .title {
    display: flex;
    flex-flow: column;
  }
  .title p {
    width: 450px;
    line-height: 36px;
    font-size: 18px;
  }

  .title h2 {
    font-size: 52px;
  }
}

@media screen and (min-width: 1440px) {
  .wrapper_events {
    max-width: 1350px;
    margin: 100px auto;
    display: flex;
    flex-flow: row-reverse;
    align-items: center;
    justify-content: space-between;
  }

  .wrapper_events_text {
    width: 45%;
  }
  .wrapper_events_img {
    width: 50%;
  }
  .title {
    display: flex;
    flex-flow: column;
  }
  .title h2 {
    font-family: RecoletaBlack;
    color: white;
    font-size: 72px;
    margin-bottom: 30px;
  }

  .title p {
    line-height: 42px;
    font-size: 22px;
    margin-bottom: 30px;
    width: 620px;
  }

  .title a {
    text-decoration: none;
    color: var(--yellow);
    text-transform: uppercase;
    margin-top: 10px;
    font-size: 22px;
    font-weight: bold;
  }

  .title img {
    width: 280px;
  }
}
</style>
