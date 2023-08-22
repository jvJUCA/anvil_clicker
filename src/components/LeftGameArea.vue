<template>
  <div class="left-game-area">
    <div class="left-game-area-background">
      <div class="points-value-div">
        <div class="points-value">
          <h1 id="weapons" class="weapons">
            {{ this.formatUpgradeCost(pointsValue) }}
            <br />
            Weapons
          </h1>
          <h3>per second: {{ this.formatUpgradeCost(afkValue) }}</h3>
        </div>
      </div>
      <div class="anvil-div" id="anvil">
        <img
          src="https://mintspace.io/wp-content/uploads/2021/11/anvilleBigRes.png"
          alt="icone"
          class="anvil"
          @click="click()"
          draggable="false"
        />
      </div>
      <div class="signature">
        Made By JUCA
        <img
          src="@/assets/graves-pixel-art.png"
          alt="graves-signature"
          height="50"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { formatNumberWithCustomSuffix } from "@/components/NumberFormatter";
export default {
  setup() {
    const store = useStore();
    const pointsValue = computed(() => store.state.pointsValue);
    const afkValue = computed(() => store.state.afkValue);
    const clickValue = computed(() => store.state.clickValue);

    const autoForgeWeapons = () => {
      store.dispatch("autoForgeWeapons");
    };

    const levelProgress = () => {
      store.dispatch('levelProgress');
    };

    const click = () => {
      store.dispatch('click');
    };

    const logKey = (e) => {
      const currentClickValue = clickValue.value;
      const targetElement = e.target;
      const divEspecifica = document.getElementById("anvil");
      if (!divEspecifica.contains(targetElement)) {
        return;
      }

      const text = document.createElement("span");
      text.innerText = "+" + formatNumberWithCustomSuffix(currentClickValue);
      text.classList.add("clickNumber", "click-up");

      text.style.position = "absolute";
      text.style.left = `${e.clientX - 40}px`;
      text.style.top = `${e.clientY - 15}px`;

      document.body.appendChild(text);

      setTimeout(() => {
        text.remove();
      }, 5000);
    };

    onMounted(() => {
      document.addEventListener("click", logKey);
      setInterval(() => {
        autoForgeWeapons();
      }, 100);
      setInterval(() => {
        levelProgress();
      },500);
    });

    return {
      pointsValue,
      afkValue,
      clickValue,
      autoForgeWeapons,
      levelProgress,
      click,
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
@keyframes click-up {
  0% {
    transform: translateY(0) rotate(0);
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateY(-400px) rotate(20deg);
    opacity: 0;
  }
}
.left-game-area {
  grid-area: left-game-area;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-image: url("@/assets/upgrades-border-textures-pixel-art.jpg") 20 round;
  background-image: url("src/assets/left-game-area-background-pixel-art.png");
  -webkit-box-shadow: inset 0px 0px 14px 1px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: inset 0px 0px 14px 1px rgba(0, 0, 0, 0.41);
  box-shadow: inset 0px 0px 14px 1px rgba(0, 0, 0, 0.41);
}
.left-game-area-background {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-right: 10px solid;
  border-image: url("@/assets/upgrades-border-textures-pixel-art.jpg") 20 round;
  background-image: url("src/assets/texture-wallpaper2-pixel-art.png");
  background-repeat: repeat;
  background-size: auto;
  -webkit-box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
  -moz-box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
  box-shadow: inset 0px 0px 25px 8px rgb(0, 0, 0);
}
.points-value-div {
  z-index: 9998;
}
.points-value {
  align-content: center;
  text-align: center;
  position: relative;
  color: rgb(255, 255, 255);
  background: rgba(0, 0, 0, 0.418);
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: auto;
  z-index: 999;
  margin-right: auto;
  white-space: nowrap;
  font-size: 65%;
}
.anvil-div {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
}
.anvil {
  margin: auto;
  transition: animation 0.3s ease;
  width: 100%;
}
.anvil:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}
.anvil:active {
  transform: scale(1);
  transition: transform 0.01s ease-in-out;
}
.clickNumber {
  pointer-events: none;
  z-index: 20;
  position: absolute;
  font-family: pixelFont;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}
.click-up {
  animation: click-up 10s ease;
}
.signature {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 12px;
  z-index: 3;
}
</style>