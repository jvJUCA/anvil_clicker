<template>
  <div class="Upgrades">
    <v-col
      cols="12"
      v-for="(upgrade, index) in upgrades[selectedUpgradeType]"
      :key="index"
    >
      <Transition name="v">
        <div
          class="upgradesWall"
          @click="buyUpgrade(index)"
          v-show="!upgrade.hiddenUpgrade"
        >
          <div class="upgradeInfo">
            <h4>
              {{ upgrade.name }}
              <br />
              <div class="price-container">
                <div class="coin-icon"></div>
                <span>{{ formatUpgradeCost(upgrade.cost) }}</span>
              </div>
            </h4>
          </div>

          <div class="upgradeLevel">
            <h1>{{ upgrade.level }}</h1>
          </div>
        </div>
      </Transition>
    </v-col>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { formatNumberWithCustomSuffix } from "@/components/NumberFormatter";
export default {
  setup() {
    const store = useStore();
    const upgrades = computed(() => store.state.upgrades);
    const selectedUpgradeType = computed(() => store.state.selectedUpgradeType);
    const pointsValue = computed(() => store.state.pointsValue);

    const buyUpgrade = (id) => {
      const upgrade = upgrades.value[selectedUpgradeType.value][id];
      store.dispatch("buyUpgrade", { upgrade, selectedUpgradeType });
    },
    updateUnlockStatus = () => {
      const upgradesOfType = upgrades[selectedUpgradeType];
      console.log(upgradesOfType);
      for (let i = 0; i < upgradesOfType.length; i++) {
        const upgrade = upgradesOfType[i];
        if (upgrade.unlockValue <= pointsValue) {
          upgrade.hiddenUpgrade = false; // Desbloquear o upgrade
        }
      }
    };
    return {
      upgrades,
      selectedUpgradeType,
      buyUpgrade,
      updateUnlockStatus,
    };
  },

  methods: {
    formatUpgradeCost(cost) {
      return formatNumberWithCustomSuffix(cost);
    },
  },
};
</script>

<style>
.Upgrades {
  grid-area: Upgrades;
  overflow-y: auto;
  border-left: 10px solid transparent;
  border-image: url("@/assets/upgrades-border-textures-pixel-art.jpg") 20 round;
  background-image: url("src/assets/texture-wallpaper2-pixel-art.png");
  background-repeat: repeat;
  background-size: auto;
  -webkit-box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
  -moz-box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
  box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
}
.upgradesWall {
  display: flex;
  justify-content: space-between;
  background: radial-gradient(rgb(194, 194, 194), rgb(131, 131, 131));
  height: 70px;
  border: none;
  border-bottom: 10px rgb(83, 55, 29) solid;
  border-image: url("@/assets/upgrades-border-textures-pixel-art.jpg") 20 round;
  -webkit-box-shadow: inset 0px 0px 15px 1px rgb(0, 0, 0);
  -moz-box-shadow: inset 0px 0px 15px 1px rgb(0, 0, 0);
  box-shadow: inset 0px 0px 15px 1px rgb(0, 0, 0);
}
.upgradeInfo {
  /* Adicione o seguinte para posicionar os elementos em uma linha */
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
}
.price-container {
  display: flex;
  align-items: center;
}
.price-container span {
  margin-right: 5px;
}
.upgradeLevel {
  display: flex;
  align-content: flex-end;
  margin: 3%;
  color: white;
  text-shadow: -3px -3px 0 #3a3a3a, 3px -3px 0 #3a3a3a, -3px 3px 0 #3a3a3a,
    3px 3px 0 #3a3a3a;
  opacity: 60%;
}
.coin-icon {
  background-image: url("@/assets/coin-pixel-art.png");
  background-size: contain;
  height: 4vh;
  width: 5vh;
  outline: none;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>