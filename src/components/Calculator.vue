<script setup>
import { computed } from "vue";
import Button from "./Button.vue";
import SmallButton from "./SmallButton.vue";
import { useCalculatorStore } from "@/stores/counter";

const calcStore = useCalculatorStore();
</script>

<template>
  <div class="border-b border-black flex flex-col gap-2 mb-4">
    <p>CurrentValue: {{ calcStore.currentValue }}</p>
    <p>StoreValue: {{ calcStore.storedValue }}</p>
    <p>CalculatedValue: {{ calcStore.calculatedValue }}</p>
    <p>CalcSymbol: {{ calcStore.calcSymbol }}</p>
  </div>
  <div class="border border-black p-2 flex flex-col gap-2">
    <div class="p-2 w-full border border-black text-end">
      {{
        calcStore.showCurrent
          ? Number(calcStore.currentValue)
            ? String(Number(calcStore.currentValue))
            : 0
          : calcStore.storedValue
      }}
    </div>
    <div class="grid grid-cols-4 grid-rows-4 gap-2">
      <Button :style="'red'" :symbol="'AC'">AC</Button>
      <Button :style="'red'" :symbol="'CE'">CE</Button>
      <Button :symbol="'%'"></Button>
      <Button :symbol="'/'"></Button>
      <Button :value="'7'"></Button>
      <Button :value="'8'"></Button>
      <Button :value="'9'"></Button>
      <Button :symbol="'*'"></Button>
      <Button :value="'4'"></Button>
      <Button :value="'5'"></Button>
      <Button :value="'6'"></Button>
      <Button :symbol="'-'"></Button>
      <Button :value="'1'"></Button>
      <Button :value="'2'"></Button>
      <Button :value="'3'"></Button>
      <Button class="row-span-2" :symbol="'+'"></Button>
      <Button :value="'0'"></Button>
      <Button :value="'.'"></Button>
      <Button :symbol="'='"></Button>
    </div>
  </div>
</template>
