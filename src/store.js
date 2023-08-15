import { createStore } from "vuex";

export default createStore({
  state: {
    clickValue: 1,
    afkValue: 0.1,
    pointsValue: 200,
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
          clickValue: 0.15,
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
      "anotherType1",
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
    },
    functionselectUpgradeType(state, { type }) {
      state.selectedUpgradeType = type;
    },
    buyUpgrade(state, { upgrade, selectedUpgradeType }) {
      if (state.pointsValue >= upgrade.cost) {
        if (selectedUpgradeType === "Upgrades") {
          state.clickValue += state.clickValue * upgrade.clickValue;
          state.afkValue += state.afkValue * upgrade.clickValue;
        } else {
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
  },
});