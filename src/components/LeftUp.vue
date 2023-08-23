<template>
  <div class="left-up">
    <div class="progress-text d-flex justify-center mb-2">
      <h4>LEVEL {{ level }}</h4>
    </div>
    <div
      class="progress mr-5 ml-5"
      @mouseover="mouseover = true"
      @mouseleave="mouseover = false"
    >
      <v-progress-linear
        style="color: white"
        :model-value="progress"
        color="light-green-darken-4"
        height="20"
        bg-opacity="0.9"
        bg-color="grey-darken-4"
        striped
        ><strong>{{
          mouseover
            ? `${format(totalPoints)} / ${format(pointsForLevel)} XP`
            : Math.ceil(progress) + "%"
        }}</strong></v-progress-linear
      >
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { formatNumberWithCustomSuffix } from "@/components/NumberFormatter";
export default {
  data() {
    return {
      mouseover: false,
    };
  },
  setup() {
    const store = useStore();
    const pointsValue = computed(() => store.state.pointsValue);
    const totalPoints = computed(() => store.state.totalPoints);
    const level = computed(() => store.state.level);
    const progress = computed(() => store.state.progress);
    const pointsForLevel = computed(() => store.state.pointsForLevel);
    return {
      pointsValue,
      totalPoints,
      level,
      progress,
      pointsForLevel,
    };
  },
  methods: {
    format(value) {
      return formatNumberWithCustomSuffix(value);
    },
  },
};
</script>

<style>
.left-up {
  grid-area: left-up;
  border-right: 10px solid transparent;
  border-bottom: 10px solid transparent;
  /* background: black; */
  background-image: url("src/assets/texture-wallpaper2-pixel-art.png");
  background-repeat: repeat;
  background-size: auto;
  border-image: url("@/assets/upgrades-border-textures-pixel-art.jpg") 20 round;
  -webkit-box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
  -moz-box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
  box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
}
.progress {
  display: flex;
  color: white;
  border: 5px solid transparent;
  border-image: url("@/assets/upgrades-border-textures-pixel-art.jpg") 20 round;
}
.progress-text {
  color: white;
  display: flex;
  align-self: center;
  margin: 5px;
}
</style>