<template>
  <div class="center-game-area">
    <div class="background-center-game-area"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.center-game-area {
  grid-area: center-game-area;
}
.background-center-game-area {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("src/assets/left-game-area-background-pixel-art.png");
  background-size: cover;
  background-position: center;
  -webkit-box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
  -moz-box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
  box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
}
</style>