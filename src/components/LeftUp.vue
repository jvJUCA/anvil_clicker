<template>
  <div class="left-up"></div>
</template>

<script>
export default {};
</script>

<style>
.left-up {
  grid-area: left-up;
  border-right: 10px solid transparent;
  border-bottom: 10px solid transparent;
  background-image: url("src/assets/texture-wallpaper2-pixel-art.png");
  background-repeat: repeat;
  background-size: auto;
  border-image: url("@/assets/upgrades-border-textures-pixel-art.jpg") 20 round;

  -webkit-box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
  -moz-box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
  box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
}
</style>