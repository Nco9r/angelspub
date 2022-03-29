<template>
  <section class="afterwork">
    <div class="wrapper_afterwork_text">
      <div class="title">
        <h2
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="20"
          data-aos-duration="700"
          data-aos-once="true"
        >
          <span>01.</span> Afterwork
        </h2>
        <p
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="40"
          data-aos-duration="700"
          data-aos-once="true"
        >
          Venez découvrir une sélection de plus de 60 Bières, 12 Becs pression
          Vins et Cocktails, dans une ambiance chaleureuse et décontractée.
          Profitez de notre happy hour de 18h à 19h30 !
        </p>
        <a
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="60"
          data-aos-duration="700"
          data-aos-once="true"
          href="/carte_angels_pub.pdf"
          target="_blank"
          >Découvrir notre carte</a
        >
        <img src="~assets/img/svg/underline.svg" alt="" />
      </div>
    </div>
    <div class="wrapper_afterwork_img">
      <img class="img_first" src="~assets/img/svg/corner.svg" alt="logo" />
      <img class="img_second" src="~assets/img/svg/stones.svg" alt="logo" />
      <div class="box_img">
        <no-ssr>
          <vue-tiny-slider v-bind="tinySliderOptions" ref="tinySlider">
            <img src="~assets/img/png/afterwork.jpg" alt="afterwork" />
            <img src="~assets/img/png/corona_web.jpg" alt="corona tireuse" />
            <img src="~assets/img/png/tireuse.jpg" alt="becs pression" />
            <img src="~assets/img/png/beer_web.jpg" alt="becs pression" />
          </vue-tiny-slider>
        </no-ssr>
      </div>
      <div class="slide_tiny">
        <button class="slidePrev" id="prev">
          <img src="@/assets/img/svg/arrow-l.svg" alt="fleche-retour" />
        </button>
        <button class="slideNext" id="next">
          <img src="@/assets/img/svg/arrow-r.svg" alt="fleche-suivant" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      tinySliderOptions: {
        mouseDrag: true,
        loop: true,
        items: 1,
        nav: false,
        container: '.box_img',
        autoplayButtonOutput: false,
        gutter: 0,
        autoplay: true,
        autoplayTimeout: 3500,
        speed: 500,
        preventScrollOnTouch: 'auto',
        controls: true,
        prevButton: '#prev',
        nextButton: '#next',
        responsive: {
          1024: {
            items: 3,
            mouseDrag: true,
            edgePadding: 0,
            gutter: 30,
            loop: true,
            prevButton: '#prev',
            nextButton: '#next',
          },
        },
      },
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css',
        },
      ],
    }
  },
}
</script>

<style scoped>
.afterwork {
  display: flex;
  flex-flow: column;
}

.title {
  padding: 20px;
}

.title h2 {
  font-family: RecoletaBlack;
  color: white;
  font-size: 32px;
  margin-bottom: 30px;
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
  font-weight: bold;
}

.title img {
  width: 180px;
}

.wrapper_afterwork_img {
  margin-top: 30px;
  position: relative;
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
  z-index: 10;
  bottom: -20px;
  width: 140px;
  left: -40px;
}

.wrapper_afterwork_img .box_img img {
  width: 100%;
}

.slide_tiny {
  display: flex;
  margin-top: 20px;
  margin-right: 20px;
  flex-flow: row;
  justify-content: flex-end;
}

.slidePrev {
  background-color: var(--red);
  border: none;
  width: 40px;
  margin: 0 5px;
  border-radius: 4px;
}

.slideNext {
  background-color: var(--red);
  border: none;
  margin: 0 5px;
  width: 40px;
  border-radius: 4px;
}

@media screen and (min-width: 1024px) {
  .wrapper_afterwork_text {
    text-align: center;
    max-width: 900px;
    display: flex;
    flex-flow: column;
    margin: auto;
    margin-top: 30px;
  }

  .title {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .title img {
    margin-top: 10px;
  }
  .box_img img {
    width: 50%;
  }
  .tns-item {
    width: 70%;
  }

  .img_second {
    position: absolute;
    z-index: 10;
    bottom: -60px;
    width: 180px;
    left: -40px;
  }

  .title p {
    line-height: 28px;
    font-size: 16px;
    margin-bottom: 30px;
    width: 600px;
  }

  .title h2 {
    font-family: RecoletaBlack;
    color: white;
    font-size: 52px;
    margin-bottom: 30px;
  }

  .slide_tiny {
    display: flex;
    margin-top: 20px;
    max-width: 900px;
    margin: 20px auto -20px auto;
    flex-flow: row;
    justify-content: flex-end;
  }
}

@media screen and (min-width: 1200px) {
  .wrapper_afterwork_text {
    text-align: center;
    max-width: 1100px;
    display: flex;
    flex-flow: column;
    margin: auto;
    margin-top: 60px;
  }

  .slide_tiny {
    display: flex;
    margin-top: 20px;
    max-width: 1100px;
    margin: 20px auto -20px auto;
    flex-flow: row;
    justify-content: flex-end;
  }

  .title h2 {
    font-family: RecoletaBlack;
    color: white;
    font-size: 52px;
    margin-bottom: 30px;
  }

  .title p {
    line-height: 36px;
    font-size: 18px;
    margin-bottom: 30px;
    width: 820px;
  }

  .title a {
    text-decoration: none;
    color: var(--yellow);
    text-transform: uppercase;
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .img_second {
    position: absolute;
    z-index: 10;
    bottom: -100px;
    width: 230px;
    left: -70px;
  }

  .img_first {
    position: absolute;
    top: -130px;
    width: 130px;
    right: 40px;
    transform: rotate(50deg);
  }

  .slidePrev {
    background-color: var(--red);
    border: none;
    width: 50px;
    margin: 0 5px;
    border-radius: 4px;
  }

  .slideNext {
    background-color: var(--red);
    border: none;
    margin: 0 5px;
    width: 50px;
    border-radius: 4px;
  }
  .title img {
    width: 230px;
  }
}

@media screen and (min-width: 1440px) {
  .wrapper_afterwork_text {
    text-align: center;
    max-width: 1350px;
    display: flex;
    flex-flow: column;
    margin: auto;
    margin-top: 60px;
  }

  .slide_tiny {
    display: flex;
    margin-top: 20px;
    max-width: 1350px;
    margin: 20px auto -20px auto;
    flex-flow: row;
    justify-content: flex-end;
  }
}
</style>
