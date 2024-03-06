<template>
  <div class="divider"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'aDivider'
})
</script>

<style scoped>
.divider {
  border: none;
  border-top: 2px dashed #ccc;
  margin: 20px 0;
}
</style>
