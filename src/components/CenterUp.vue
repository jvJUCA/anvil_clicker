<template>
  <div class="center-up"></div>
</template>

<script>
export default {};
</script>

<style>
.center-up {
  grid-area: center-up;
  background-image: url("src/assets/texture-wallpaper2-pixel-art.png");
  background-repeat: repeat;
  background-size: auto;
  border-bottom: 10px solid transparent;
  border-image: url("@/assets/upgrades-border-textures-pixel-art.jpg") 20 round;
  -webkit-box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
  -moz-box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
  box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
}
</style>