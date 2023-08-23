import { createStore } from "vuex";

export default createStore({
  state: {
    clickValue: 1,
    afkValue: 0.1,
    pointsValue: 0,
    totalPoints: 0,
    level: 0,
    progress: 0,
    pointsForLevel: 1000,
    antPointsForLEvel: 0,
    hiddenUpgrade: false,
    unlockValue: 0,
    selectedUpgradeType: "clickUpgrades",
    upgrades: {
      clickUpgrades: [
        {
          name: "Stronger arms",
          cost: 20,
          clickValue: 0.1,
          afkValue: 0,
          level: 0,
          hiddenUpgrade: false,
          unlockValue: 0,
        },
        {
          name: "Better hammer I",
          cost: 100,
          clickValue: 0.4,
          afkValue: 0,
          level: 0,
          hiddenUpgrade: false,
          unlockValue: 0,
        },
        {
          name: "Heavier anvil I",
          cost: 500,
          clickValue: 2,
          afkValue: 0,
          level: 0,
          hiddenUpgrade: false,
          unlockValue: 0,
        },
        {
          name: "Heavier anvil I",
          cost: 500,
          clickValue: 2,
          afkValue: 0,
          level: 0,
          hiddenUpgrade: true,
          unlockValue: 10,
        },
      ],
      afkUpgrades: [
        {
          name: "Auto Forging I",
          cost: 100,
          clickValue: 0,
          afkValue: 0.5,
          level: 0,
          hiddenUpgrade: false,
          unlockValue: 0,
        },
        {
          name: "AFK Upgrade 2",
          cost: 1500,
          clickValue: 0,
          afkValue: 7.5,
          level: 0,
          hiddenUpgrade: false,
          unlockValue: 0,
        },
        {
          name: "AFK Upgrade 3",
          cost: 3000,
          clickValue: 0,
          afkValue: 15,
          level: 0,
          hiddenUpgrade: false,
          unlockValue: 0,
        },
      ],
      Upgrades: [
        {
          name: "Bronze hammer",
          cost: 10000,
          clickValue: 0.15,
          afkValue: 0,
          level: 0,
          hiddenUpgrade: false,
          unlockValue: 0,
        },
        {
          name: "Bronze anvil",
          cost: 15000,
          clickValue: 10.15,
          afkValue: 0,
          level: 0,
          hiddenUpgrade: false,
          unlockValue: 0,
        },
      ],
      anotherType2: [
        {
          name: "Another Upgrade 3",
          cost: 0,
          clickValue: 0,
          level: 0,
          hiddenUpgrade: false,
          unlockValue: 0,
        },
        {
          name: "Another Upgrade 4",
          cost: 0,
          clickValue: 0,
          level: 0,
          hiddenUpgrade: false,
          unlockValue: 0,
        },
      ],
    },
    upgradeTypes: [
      "clickUpgrades",
      "afkUpgrades",
      "Upgrades",
      "anotherType2",
    ],

  },
  actions: {
    buyUpgrade({ commit, state }, payload) {
      commit('buyUpgrade', payload);
      commit('updateUnlockStatus');
    },
    autoForgeWeapons({ commit, state }) {
      commit('autoForgeWeapons');
    },
    levelProgress({ commit, state }) {
      commit('levelProgress')
    },
    click({ commit, state }) {
      commit('click');
    },
    functionselectUpgradeType({ commit, state }, payload) {
      commit('functionselectUpgradeType', payload);
    }

  },
  mutations: {
    click(state) {
      state.pointsValue += state.clickValue;
      state.totalPoints += state.clickValue;
    },
    functionselectUpgradeType(state, { type }) {
      state.selectedUpgradeType = type;
    },
    buyUpgrade(state, { upgrade, selectedUpgradeType }) {
      if (state.pointsValue >= upgrade.cost) {
        console.log(selectedUpgradeType);
        if (state.selectedUpgradeType === "Upgrades") {
          console.log("caiu no if");
          state.clickValue += state.clickValue * upgrade.clickValue;
          state.afkValue += state.afkValue * upgrade.clickValue;
        } else {
          console.log("caiu no else");
          state.clickValue += upgrade.clickValue;
          state.afkValue += upgrade.afkValue;
        }
        state.pointsValue -= upgrade.cost;
        upgrade.level += 1;
        upgrade.cost += Math.floor(upgrade.cost / 4);
      } else {
        alert("you do not have enough money");
      }
    },
    autoForgeWeapons(state) {
      state.pointsValue += state.afkValue / 10;
      state.totalPoints += state.afkValue / 10;
    },
    updateUnlockStatus(state) {
      const upgradesOfType = state.upgrades[state.selectedUpgradeType];
      for (let i = 0; i < upgradesOfType.length; i++) {
        const upgrade = upgradesOfType[i];
        if (upgrade.unlockValue <= state.pointsValue) {
          upgrade.hiddenUpgrade = false;
        }
      }
    },
    levelProgress(state) {
      if (((state.totalPoints - state.antPointsForLEvel) / (state.pointsForLevel - state.antPointsForLEvel)) * 100 < 0) { 
        state.progress = 0
      }else{
        state.progress = ((state.totalPoints - state.antPointsForLEvel) / (state.pointsForLevel - state.antPointsForLEvel)) * 100;
      }
      if (state.progress >= 100) {
        state.level++;
        state.antPointsForLEvel = state.pointsForLevel; // Salva os pontos do nível anterior
        state.pointsForLevel *= 3;
        state.progress = 0;
      }
    }
  },
});