<script setup>
import { onMounted } from "vue";

import { fetchTodos, items } from "./API";

import TodoRow from "./TodoRow.vue";

onMounted(async () => {
  fetchTodos();
});
</script>


<template>
  <ol id="items">
    <TodoRow
      v-for="(item, item_i) in items"
      :key="`item_${item.id}`"
      :item="item"
      :item_i="item_i"
    />
  </ol>
</template>


<style>
</style>
