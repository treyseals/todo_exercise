<script setup>
import { items } from "./API.js";

import Row from "./Row.vue";

const props = defineProps({ item: Object,  item_i: [Number,String] });

const deleteTodo = () => {
	
	
		
  items.value.splice(props.item_i, 1);
  

  
};


</script>



<template>
  <li>
    <Row>
      <span v-html="item.name"></span>
      <button type="button" @click="deleteTodo">Delete</button>
    </Row>
  </li>
</template>


<style scoped>
</style>
