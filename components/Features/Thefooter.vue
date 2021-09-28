<template>
  <footer>
      <div class="line">
          <p>À chaque jour suffit sa pinte!</p>
      </div>
      <hr>
      <div class="items_footer">
          <div class="items_left">
              <div class="item">
                  <h3>Adresse</h3>
                  <p>78 rue Lagrua, <br> 33260, La Teste de Buch.</p>
                  <p class="waze"><a href="https://ul.waze.com/ul?utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location" target="_blank">Voir sur waze</a></p>
              </div>
              <div class="item">
                  <h3>Contact</h3>
                  <p>unebiere@angels-pub.fr</p>
              </div>
          </div>
          <div class="items_right">
              <div class="item_sociaux">
                  <div class="item hastag"><p>#unepinteourien</p></div>
                  <img src="~assets/img/svg/fb.svg" alt="">
                  <img src="~assets/img/svg/insta.svg" alt="">
              </div>
          </div>
      </div>
      <div class="items_desktop">
          <div class="items_desktop_left">
              <p>78 rue Lagrua, 33260, La Teste de Buch.</p>
              <p>unebiere@angels-pub.fr</p>
          </div>
          <div class="items_desktop_right">
               <div class="item hastag"><p>#unepinteourien</p></div>
                  <img src="~assets/img/svg/fb.svg" alt="">
                  <img src="~assets/img/svg/insta.svg" alt="">
          </div>
      </div>
      <div class="copyright">
          © Angel's Pub 2021 - Tous droits réservés - Made by Nicolas ROUX.
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
.line p {
    font-family: heart, 'Times New Roman', Times, serif;
    font-size: 25px;
}

.line {
    margin-top: 50Px;
    display: flex;
    flex-flow: row;
    justify-content: center;
}

hr {
    
    border: none;
    height: 2px;
    margin: 20px 20px 10px 20px;
    background-color: var(--input);
}

.items_footer {
    text-align: center;
}

.item {
    margin-top: 30px;
    margin-bottom: 50px;
}

.item h3 {
    margin: 10px 0;
    font-family: RecoletaBold;
    font-size: 18px;
}
.item p {
    margin: 10px 0;
    margin-bottom: 30px;
}

.items_desktop {
    display: none;
}

.item a  {
    width: 50%;
    padding: 12px 32px;
    text-decoration: none;
    margin: 30px auto!important;
    border-radius: 3px;
    background-color: var(--yellow);
    color: var(--black);
    font-family: RecoletaBold;
}

.hastag {
    margin-bottom: -10px!important;
}

.item_sociaux img {
    margin-right: 10px;
    margin-left: 10px;
}

.copyright {
    padding: 10px 10px 10px 20px;
    font-size: 12px;
}

@media screen and (min-width: 1024px) {
  .line {
    justify-content: flex-end;
  }
hr {
    margin: 20px 0;
}

.items_desktop {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.items_desktop_left {
    display: flex;
    width: 70%;
    justify-content: space-between;
}

.items_desktop_right {
    display: flex;
    margin-top: -20px;
    align-items: center;
    justify-content: space-between;
}

.items_desktop_right img {
    margin-left: 20px;
    margin-right: 20px;
}

.copyright {
    display: flex;
    justify-content: flex-end;
}
 hr {
     margin-top: 50px;
     margin-bottom: 50px;
 }

  .line p {
      font-size: 30px;
  }

  .items_footer {
      display: none;
      justify-content: space-between;
      align-items: flex-start;
  }

  .items_left {
       display: flex;
      justify-content: space-between;
      align-items: flex-start;
  }

   .items_sociaux {
       display: flex;
       flex-flow: row;

  }
}



@media screen and (min-width: 1200px) {
  .line {
    justify-content: flex-end;
  }
hr {
    margin: 20px 0;
}

.items_desktop {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.items_desktop_left {
    display: flex;
    width: 50%;
    justify-content: space-between;
}

.items_desktop_right {
    display: flex;
    margin-top: -20px;
    align-items: center;
    justify-content: space-between;
}

.items_desktop_right img {
    margin-left: 20px;
    margin-right: 20px;
}

.copyright {
    display: flex;
    justify-content: flex-end;
}
 hr {
     margin-top: 50px;
     margin-bottom: 50px;
 }

  .line p {
      font-size: 30px;
  }

  .items_footer {
      display: none;
      justify-content: space-between;
      align-items: flex-start;
  }

  .items_left {
       display: flex;
      justify-content: space-between;
      align-items: flex-start;
  }

   .items_sociaux {
       display: flex;
       flex-flow: row;

  }
}

@media screen and (min-width: 1440px) {
 .items_desktop_left {
    display: flex;
    width: 40%;
    justify-content: space-between;
}
}

</style>