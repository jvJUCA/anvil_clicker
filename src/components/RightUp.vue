<template>
  <div class="right-up">
    <v-row no-gutters class="fill-height">
      <v-col class="fill-height" cols="3">
        <div class="upgradeSelectorBorderFull">
          <div
            class="upgradeSelector"
            @click="functionselectUpgradeType('clickUpgrades')"
          >
            <div class="upgradeStyle">
              <img src="@/assets/click-pixel-art.png" alt="mouse" />
            </div>
          </div>
        </div>
      </v-col>
      <v-col class="fill-height" cols="3">
        <div class="upgradeSelectorBorderRight">
          <div
            class="upgradeSelector"
            @click="functionselectUpgradeType('afkUpgrades')"
          >
            <div class="upgradeStyle">
              <img src="@/assets/hammer-pixel-art.png" alt="hammer" />
            </div>
          </div>
        </div>
      </v-col>
      <v-col class="fill-height" cols="3">
        <div class="upgradeSelectorBorderRight">
          <div
            class="upgradeSelector"
            @click="functionselectUpgradeType('Upgrades')"
          >
            <div class="upgradeStyle">
              <img
                src="@/assets/star-icon-pixel-art.png"
                alt="hammer"
                width="70"
              />
            </div>
          </div>
        </div>
      </v-col>
      <v-col class="fill-height" cols="3">
        <div class="upgradeSelectorBorderRight">
          <div
            class="upgradeSelector"
            @click="functionselectUpgradeType('anotherType2')"
          >
            <div class="upgradeStyle">
              <img src="@/assets/question-mark-pixel-art.png" alt="hammer" />
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const selectedUpgradeType = computed(() => store.state.selectedUpgradeType);

    const functionselectUpgradeType = (type) => {
      store.dispatch("functionselectUpgradeType", { type });
    };
    return {
      selectedUpgradeType,
      functionselectUpgradeType,
    };
  },

  data() {
    return {
      selectedUpgradeType: "clickUpgrades",
    };
  },
  methods: {},
};
</script>

<style>
.right-up {
  grid-area: right-up;
  border-left: 10px solid transparent;
  border-bottom: 10px solid;
  border-image: url("@/assets/upgrades-border-textures-pixel-art.jpg") 20 round;
  background-color: rgb(158, 112, 81);
  background-repeat: repeat;
  background-size: auto;
  background-repeat: repeat;
  background-size: auto;
}
.upgradeSelector {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.41);
  background-size: cover;
  -webkit-box-shadow: inset 0px 0px 14px 1px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: inset 0px 0px 14px 1px rgba(0, 0, 0, 0.41);
  box-shadow: inset 0px 0px 14px 1px rgba(0, 0, 0, 0.41);
}
.upgradeSelectorBorderFull {
  height: 100%;
  border: 5px solid transparent;
  border-image: url("src/assets/textures-upgrades-pixel-art.jpg") 20 round;
}
.upgradeSelectorBorderRight {
  height: 100%;
  border-top: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-image: url("src/assets/textures-upgrades-pixel-art.jpg") 20 round;
}
.upgradeSelector:hover {
  cursor: pointer;
  background: #ffffff7e;
}
.upgradeStyle img {
  display: flex;
  max-width: 100%;
}
</style>