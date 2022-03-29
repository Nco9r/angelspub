<template>
  <section class="wrapper_resa">
    <img class="img_1" src="~assets/img/svg/trefle_l.svg" alt="" />
    <img class="img_2" src="~assets/img/svg/trefle_r.svg" alt="" />
    <div class="title">
      <h2
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="20"
        data-aos-duration="700"
        data-aos-once="true"
      >
        On se laisse tenter ?
      </h2>
      <p>Réservation à partir de 10 personnes</p>
      <a
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="40"
        data-aos-duration="700"
        data-aos-once="true"
        href="tel:+33556663941"
        >Réserver</a
      >
    </div>
  </section>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default { mixins: [aosMixin] }
</script>

<style scoped>
.wrapper_resa {
  /* background-image: url('~assets/img/png/resa.jpg'); */
  height: 310px;
  background-color: var(--red);
  background-size: cover;
  position: relative;
  margin-top: -5px;
}

.title {
  text-align: center;
  padding: 80px 20px 20px 20px;
}

.title h2 {
  font-size: 32px;

  font-family: RecoletaBlack;
}

.title p {

  width: 210px;
  margin: 10px auto 40px auto;
}

.wrapper_resa .img_1 {
  position: absolute;
  top: 20px;
  width: 30px;
  left: 20px;
}
.wrapper_resa .img_2 {
  position: absolute;
  top: 20px;
  width: 30px;
  right: 20px;
}

.title a {
  background-color: var(--yellow);
  padding: 12px 32px;
  border-radius: 4px;
  margin-top: 30px;
  text-decoration: none;
  font-family: RecoletaBold;
  color: var(--black);
  font-size: 16px;
}

@media screen and (min-width: 1024px) {
  .title h2 {
  font-size: 52px;


  font-family: RecoletaBlack;
}
.wrapper_resa {
  /* background-image: url('~assets/img/png/resa.jpg'); */
  height: 360px;
  background-color: var(--red);
  background-size: cover;
  position: relative;
  margin-top: -5px;
}

.title p {

  width: 260px;
  margin: 10px auto 40px auto;
  font-size: 18px;
  line-height: 32px;
}
}

@media screen and (min-width: 1200px) {
  .title h2 {
  font-size: 52px;

  font-family: RecoletaBlack;
}
}
</style>
