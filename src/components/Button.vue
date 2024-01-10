<script setup>
import { useCalculatorStore } from "@/stores/counter";
const calcStore = useCalculatorStore();
const props = defineProps({
  style: {
    type: String,
    default: "standard",
  },
  value: String,
  symbol: String,
});

const styles =
  props.style === "standard"
    ? "bg-blue-200 hover:bg-blue-400 active:bg-blue-600"
    : "bg-red-400 hover:bg-red-500 active:bg-red-600";

const handleCalc = () => {
  if (props.value) {
    if (calcStore.currentValue.includes(".") && props.value === ".") {
      return;
    }
    calcStore.currentValue += props.value;
    calcStore.showCurrent = true;
  }
  if (props.symbol) {
    if (props.symbol === "AC") {
      calcStore.currentValue = "";
      calcStore.storedValue = 0;
      calcStore.calcSymbol = "";
    } else if (props.symbol === "CE") {
      calcStore.currentValue = "";
    } else if (props.symbol === "=") {
      calcStore.finishCalc();
    } else {
      calcStore.newSymbol(props.symbol);
    }
  }
};
</script>

<template>
  <button
    @click="handleCalc"
    :class="`border border-black rounded-md min-h-16 min-w-20 flex justify-center items-center ${styles}`"
  >
    {{ props.value }} {{ props.symbol }}
  </button>
</template>
