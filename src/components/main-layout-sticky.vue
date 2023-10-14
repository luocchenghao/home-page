<template>
  <div class="sticky-container">
    <div class="sticky-box1">
      <p style="padding-bottom: 1px">Contact</p>
      <p>Us</p>
    </div>
    <div v-if="transMark">
      <a-tooltip placement="left" color="white">
        <template #title>
          <p class="font-semibold p-10" style="color: #4a4a53; font-size: 18px">
            19520379048
          </p>
        </template>
        <div class="common-flex">
          <img :src="getNormalUrl('img23')" />
          Telephone
        </div>
      </a-tooltip>
      <a-tooltip placement="left" color="white">
        <template #title>
          <p class="font-semibold p-10" style="color: #4a4a53; font-size: 18px">
            lui93522@gmail.com
          </p>
        </template>
        <div class="common-flex">
          <img style="height: 14px" :src="getNormalUrl('img24')" />
          Email
        </div>
      </a-tooltip>
    </div>
    <div class="common-flex">
      <img
        :style="{ transform: !transMark ? 'rotate(180deg)' : '' }"
        style="height: 10px"
        :src="getNormalUrl('img22')"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getNormalUrl } from "../utils";
const transMark = ref(true);
</script>

<style scoped>
.sticky-container {
  position: fixed;
  right: 0;
  top: 300px;
  width: 74px;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
}
.sticky-box1 {
  height: 64px;
  background: #0f5fd5;
  border-radius: 6px 6px 0px 0px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  line-height: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.common-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 64px;
  font-size: 12px;
  font-weight: 400;
  color: #909097;
  line-height: 14px;
  background-color: #fff;
  cursor: pointer;
}
.common-flex:not(:last-child) {
  border-bottom: 1px solid #f5f5fb;
}
.common-flex:last-child {
  border-radius: 0px 0px 6px 6px;
}
.common-flex img {
  margin-bottom: 5px;
  width: 20px;
  height: 20px;
}
</style>
