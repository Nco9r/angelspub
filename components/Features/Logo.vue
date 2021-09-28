<template>
  <div class="logo">
      <img src="~assets/img/svg/logo.svg" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style>

.logo {
    text-align: center;
    margin-left: -30px;
}

.logo img {
    width: 100px;
    margin-top: 30px;
    margin-bottom: 50px;
}

@media screen and (min-width: 768px) {
}

@media screen and (min-width: 1024px) {
    .logo {
    text-align: left;
    margin-left: 20px;
}

.logo img {
    width: 90px;
    margin-top: 30px;
    margin-bottom: 30px;
}
}

@media screen and (min-width: 1200px) {
}

@media screen and (min-width: 1440px) {
}

</style>