import { defineStore } from "pinia";

export const useCalculatorStore = defineStore("calculator", {
  state: () => ({
    currentValue: "0",
    storedValue: 0,
    calcSymbol: "",
    showCurrent: true,
  }),

  getters: {
    calculatedValue(state) {
      if (state.currentValue && state.calcSymbol) {
        if (state.calcSymbol === "+") {
          return Number(state.currentValue) + Number(state.storedValue);
        }
        if (state.calcSymbol === "-") {
          return Number(state.storedValue) - Number(state.currentValue);
        }
        if (state.calcSymbol === "*") {
          return Number(state.currentValue) * Number(state.storedValue);
        }
        if (state.calcSymbol === "/") {
          return Number(state.storedValue) / Number(state.currentValue);
        }
        if (state.calcSymbol === "%") {
          return Number(state.storedValue) % Number(state.currentValue);
        }
        return 0;
      }
      return 0;
    },
  },

  actions: {
    resetCurrent() {
      this.currentValue = "0";
    },

    finishCalc() {
      this.storedValue = this.calculatedValue
        ? this.calculatedValue
        : Number(this.currentValue);
      this.resetCurrent();
      this.showCurrent = false;
    },
    newSymbol(symbol) {
      this.finishCalc();
      this.calcSymbol = symbol;
    },
  },
});
