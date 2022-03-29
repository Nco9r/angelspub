<template>
  <footer>
    <div class="line">
      <p>À chaque jour suffit sa pinte!</p>
    </div>
    <hr />
    <div class="items_footer">
      <div class="items_left">
        <div class="item">
          <h3>Horaire</h3>
          <p>
            Lun - Fermé <br />
            Mar - Fermé <br />Mer - Dim / 18h - 00h<br />
          </p>
        </div>
        <div class="item">
          <h3>Adresse</h3>
          <p>
            78 rue Lagrua, <br />
            33260, La Teste de Buch.
          </p>
          <p class="waze">
            <a
              href="https://www.waze.com/fr/live-map/directions/gironde/la-teste-de-buch?latlng=44.64368155078856%2C-1.1574804782867434&utm_campaign=waze_website&utm_medium=website_menu&utm_source=waze_website"
              target="_blank"
              >Voir sur waze</a
            >
          </p>
        </div>
        <div class="item">
          <h3>Contact</h3>
          <p>unebiere@angels-pub.fr <br />05 56 66 39 41</p>
        </div>
      </div>
      <div class="items_right">
        <div class="item_sociaux">
          <div class="item hastag"><p>#unepinteourien</p></div>
          <img src="~assets/img/svg/fb.svg" alt="" />
          <a href="https://www.instagram.com/angelspub_/" target="_blank"
            ><img src="~assets/img/svg/insta.svg" alt=""
          /></a>
        </div>
      </div>
    </div>

    <hr />
    <div class="copyright">
      © Angel's Pub 2022 - Tous droits réservés - Made by Nicolas ROUX.
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
.line p {
  font-family: heart, 'Times New Roman', Times, serif;
  font-size: 28px;
}

.line {
  margin-top: 50px;
  display: flex;
  flex-flow: row;
  justify-content: center;
}

hr {
  border: none;
  height: 1px;
  margin: 40px 20px 10px 20px;
  background-color: var(--yellow);
}

.items_footer {
  text-align: center;
}

.items_left {
  display: flex;
  flex-flow: column;
  align-items: flex-start;

}



.item {
  margin-top: 20px;
  margin-bottom: 20px;
  margin: auto;
  text-align: center;
}

.item h3 {
  margin: 10px 0;
  font-family: RecoletaBlack;
  color: white;
  font-size: 18px;
}
.item p {
  margin: 10px 0;
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 24px;
}

.items_desktop {
  display: none;
}

.item a {
  width: 50%;
  padding: 12px 32px;
  text-decoration: none;
  margin: 30px auto !important;
  border-radius: 3px;
  font-size: 16px;
  background-color: var(--yellow);
  color: var(--black);
  font-family: RecoletaBold;
}

.hastag {
  margin-bottom: -10px !important;
}

.item_sociaux img {
  margin-right: 10px;
  margin-left: 10px;
}

.copyright {
  padding: 10px 10px 50px 20px;
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
}

.items_right {
  display: flex;
  flex-flow: column;
  margin: auto;
}

@media screen and (min-width: 1024px) {
  .line {
    display: none;
  }
  hr {
    margin: 20px 0;
  }
}

.items_footer {
  display: flex;
  flex-flow: column;
  max-width: 900px;
  margin: 20px auto;
}

.items_left {
  display: flex;
  flex-flow: row wrap!important;
  justify-content: space-between;
  align-items: flex-start;
}

.items_right {
  display: flex;
  flex-flow: row wrap;
  align-items: left;
}

@media screen and (min-width: 1200px) {
  .items_footer {
    display: flex;
    flex-flow: column;
    max-width: 1100px;
    margin: 20px auto;
  }
}
@media screen and (min-width: 1440px) {
  .items_footer {
    display: flex;
    flex-flow: column;
    max-width: 1350px;
    margin: 20px auto;
  }
}
</style>
