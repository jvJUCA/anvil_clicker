<template>
  <div class="container">
    <Upgrades />

    <!-- //////////////////////////////////// RIGHT UP AREA ///////////////////////////////// -->
    <RightUp />

    <!-- //////////////////////////////////// CENTER UP AREA ///////////////////////////////// -->
    <CenterUp />

    <!-- //////////////////////////////////// LEFT UP AREA ///////////////////////////////// -->
    <LeftUp />

    <!-- //////////////////////////////////// LEFT GAME AREA ///////////////////////////////// -->
    <LeftGameArea />

    <!-- // //////////////////////////////// CENTER GAME AREA //////////////////////////////// -->
    <CenterGameArea />
  </div>
</template>

    <!-- //////////////////////////////////// SCRIPT AREA ///////////////////////////////// -->
<script>
import Upgrades from "@/components/Upgrades.vue";
import RightUp from "@/components/RightUp.vue";
import CenterUp from "@/components/CenterUp.vue";
import LeftUp from "@/components/LeftUp.vue";
import LeftGameArea from "@/components/LeftGameArea.vue";
import CenterGameArea from "@/components/CenterGameArea.vue";
export default {
  components: {
    Upgrades,
    RightUp,
    CenterUp,
    LeftUp,
    LeftGameArea,
    CenterGameArea,
  },
  data() {
    return {
      valor: 0,
      clickValue: 1,
      afkValue: 0.1,
      pointsValue: 0,
      hiddenUpgrade: false,
      unlockValue: 0,
      selectedUpgradeType: "clickUpgrades",
      upgradeTypes: [
        "clickUpgrades",
        "afkUpgrades",
        "anotherType1",
        "anotherType2",
      ],
    };
  },
  created() {},
  mounted() {
    setInterval(() => {
      this.title();
    }, 3000);
  },
  methods: {
    selectUpgradeType(type) {
      this.selectedUpgradeType = type;
    },
    formatNumberWithCustomSuffix(value) {
      if (value < 1) {
        return value.toFixed(1);
      }
      const suffixes = [
        "",
        "K",
        "M",
        "B",
        "T",
        "Qa",
        "Qi",
        "Sx",
        "Sp",
        "Oc",
        "No",
        "De",
        "UnD",
        "DuD",
        "TrD",
        "QaD",
        "QiD",
        "SeD",
        "SpD",
        "OcD",
        "NoD",
        "Vi",
        "UnV",
        "DuV",
        "TrV",
        "QaV",
        "QiV",
        "SeV",
        "SpV",
        "OcV",
        "NoV",
        "Ti",
        "UnT",
        "DuT",
        "TrT",
        "QaT",
        "QiT",
        "SeT",
        "SpT",
        "OcT",
        "NoT",
        "Go",
        "UnG",
        "DuG",
        "TrG",
        "QaG",
        "QiG",
        "SeG",
        "SpG",
        "OcG",
        "NoG",
        "Ge",
        "UnGe",
        "DuGe",
        "TrGe",
        "QaGe",
        "QiGe",
        "SeGe",
        "SpGe",
        "OcGe",
        "NoGe",
        "Ze",
        "UnZe",
        "DuZe",
        "TrZe",
        "QaZe",
        "QiZe",
        "SeZe",
        "SpZe",
        "OcZe",
        "NoZe",
        "Yi",
        "UnYi",
        "DuYi",
        "TrYi",
        "QaYi",
        "QiYi",
        "SeYi",
        "SpYi",
        "OcYi",
        "NoYi",
        "Xa",
        "UnXa",
        "DuXa",
        "TrXa",
        "QaXa",
        "QiXa",
        "SeXa",
        "SpXa",
        "OcXa",
        "NoXa",
        "Wk",
        "UnWk",
        "DuWk",
        "TrWk",
        "QaWk",
        "QiWk",
        "SeWk",
        "SpWk",
        "OcWk",
        "NoWk",
        "Yn",
        "UnYn",
        "DuYn",
        "TrYn",
        "QaYn",
        "QiYn",
        "SeYn",
        "SpYn",
        "OcYn",
        "NoYn",
      ];
      const powersOfTen = Math.floor(Math.log10(Math.abs(value)) / 3);
      const scaledValue = value / Math.pow(10, powersOfTen * 3);
      const suffix = suffixes[powersOfTen];

      const numberFormat = new Intl.NumberFormat("en", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 2,
      });

      const formattedValue = numberFormat.format(scaledValue);

      return `${formattedValue} ${suffix}`;
    },
    title() {
      let titulo = this.formatNumberWithCustomSuffix(this.pointsValue);
      document.title = titulo + " Weapons";
    },
  },
  beforeDestroy() {
    document.removeEventListener("click", this.logKey);
  },
};
</script>

<style>
@font-face {
  font-family: pixelFont;
  src: url("@/assets/Pixelated 2.ttf");
}
.container {
  font-family: pixelFont;
  font-size: 85%;
  color: rgb(0, 0, 0);
  user-select: none;
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1.9fr 1fr;
  grid-template-rows: 0.3fr 2fr;
  grid-auto-flow: row;
  grid-template-areas:
    "left-up center-up right-up"
    "left-game-area center-game-area Upgrades";
}
body {
  margin: 0;
  overflow: hidden;
}
h1 {
  width: 100%;
}
.v-col {
  padding: 0 !important;
}
</style>