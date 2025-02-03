<script setup lang="ts">
const props = defineProps<{ color?: string }>();
</script>

<template>
  <div>
    <div class="box" :style="{ color: props.color, borderColor: props.color }">
      <slot mdc-unwrap="p" />
    </div>
  </div>
</template>

<style scoped>
.box {
  margin: 8px 0;
  display: inline-block;
  padding: 4px 8px;
  border: 1px solid #000;
}
</style>
