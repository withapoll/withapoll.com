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
  border-top: 0.125rem dashed #ccc;
  margin: 1.25rem 0;
}
</style>
