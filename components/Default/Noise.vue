<template>
    <div class="neige"></div>
</template>

<script>
export default {

}
</script>

<style scoped>

.neige { 
    top: -40vw;
    right: -40vw;
    bottom: -40vw;
    left: -40vw;
    width: 200%;
    height: 200%;
    position: fixed;
    z-index: 999999;
    background-position: 100%;
    background-image: url('~assets/img/png/noise.png');
    opacity: .3;
    pointer-events: none;
    animation: NeigeGenerate 2s steps(2) infinite;  
}

@keyframes NeigeGenerate {

  0% {
    transform: translate3d(0,9rem,0);
}
10% {
    transform: translate3d(-1rem,-4rem,0);
}
20% {
    transform: translate3d(-8rem,2rem,0);
}
30% {
    transform: translate3d(9rem,-9rem,0);
}
40% {
    transform: translate3d(-2rem,7rem,0);
}
50% {
    transform: translate3d(-9rem,-4rem,0);
}
60% {
    transform: translate3d(2rem,6rem,0);
}
70% {
    transform: translate3d(7rem,-8rem,0);
}
80% {
    transform: translate3d(-9rem,1rem,0);
}
90% {
    transform: translate3d(6rem,-5rem,0);
}
100% {
    transform: translate3d(-7rem,0,0);
}
  
}

</style>