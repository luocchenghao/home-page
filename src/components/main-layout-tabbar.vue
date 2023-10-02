<template>
  <div
    class="flex overflow-x-auto overflow-y-hidden"
    style="padding-bottom: 20px; border-bottom: 1px solid #909097"
  >
    <div
      data-aos="fade-right"
      class="tabbar-item flex-none"
      :class="[curIndex === index ? 'actived' : '']"
      v-for="(item, index) in list"
      :key="index"
      @click="$emit('changeBar', index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup>
defineEmits(["changeBar"]);
defineProps(["list", "curIndex"]);
</script>

<style scoped>
.tabbar-item {
  color: #8c8c8c;
  cursor: pointer;
}
.tabbar-item:not(:first-child) {
  margin-left: 40px;
}
.actived {
  color: #0f5fd5;
  position: relative;
  font-weight: 600;
}
.actived::after {
  content: "";
  height: 3px;
  width: 40px;
  position: absolute;
  bottom: -22px;
  left: 50%;
  transform: translate(-20px, -50%);
  background-color: #0f5fd5;
}
</style>
