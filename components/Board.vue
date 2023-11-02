<template>
  <div class="board">

  </div>
</template>

<script lang="ts" setup>
import Deck from "~/service/Card";

const deckService = new Deck();

console.log(deckService.getDeck().value);
</script>

<style lang="scss" scoped>
.board {
  background-color: green;
  min-height: 100svh;
  min-width: 100svw;
}
</style>