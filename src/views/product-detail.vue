<template>
  <main-layout-banner :type="'product'" :url="'img7'"></main-layout-banner>
  <div class="mt-410">
    <div
      class="w-full"
      :style="{
        background: '#f4f8fb',
      }"
    >
      <div class="w-1280 m-auto py-80">
        <div class="pb-40 text-center border-b" data-aos="fade-up">
          <p class="font-semibold text-54" style="line-height: 75px">
            <span style="color: #0f5fd5">{{
              curSortEquimentList.title.substring(0, 1)
            }}</span>
            <span style="color: #8c8c8c">{{
              curSortEquimentList.title.substring(
                1,
                curSortEquimentList.title.length
              )
            }}</span>
          </p>
          <p class="font-semibold text-28" style="line-height: 40px">
            {{ curEquiment.title }}
          </p>
        </div>
        <div class="flex mt-20 bg-white">
          <div class="basis-1/2">
            <img
              data-aos="fade-right"
              :src="
                getAssetUrl(curSortEquimentList.type, curEquiment.bannerPic)
              "
            />
          </div>
          <div class="basis-1/2 flex flex-col p-40 justify-center bg-white">
            <div class="title" data-aos="fade-left">
              {{ curEquiment.title }}
            </div>
            <div class="info" data-aos="fade-left">
              <p>use:</p>
              <p>{{ curEquiment.desc }}</p>
              <p class="mt-20">characteristic:</p>
              <p v-for="(item, index) in curEquiment.features" :key="index">
                {{ index + 1 }}. {{ item }}
              </p>
            </div>
            <div
              data-aos="fade-left"
              @click="handleConsultEquiment"
              style="margin-bottom: 0"
              class="spec cursor-pointer flex items-center"
            >
              Contact Us
            </div>
          </div>
        </div>
        <div
          class="pt-80 border-b"
          v-if="curEquiment.tech && curEquiment.tech.length > 0"
        >
          <main-layout-tabbar
            :list="[{ title: 'Details of parameters' }]"
            :cur-index="0"
          ></main-layout-tabbar>
          <div class="py-40">
            <table
              class="table-auto w-full border-collapse border"
              v-if="curEquiment.sort"
            >
              <tbody>
                <tr v-for="(tdItem, index) in curEquiment.tech" :key="index">
                  <td
                    class="w-1/3 border text-center"
                    v-for="(tdSubItem, subIndex) in tdItem"
                    :key="tdSubItem"
                  >
                    {{ tdSubItem }}
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table-auto w-full border-collapse border" v-else>
              <tbody>
                <tr v-for="tdItem in curEquiment.tech" :key="tdItem.key">
                  <td class="w-1/3 border text-center">
                    {{ tdItem.key }}
                  </td>
                  <td class="w-2/3 border">
                    {{ tdItem.value }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex flex-col">
          <img :src="curEquiment.image" class="mt-40" />
        </div>
      </div>
    </div>
    <a-modal
      v-model:open="openMark"
      :maskClosable="true"
      :footer="null"
      :title="
        h(
          'div',
          {
            style: {
              textAlign: 'center',
              color: '#fff',
            },
          },
          [
            h(
              'p',
              {
                style: {
                  fontSize: '28px',
                  fontWeight: 500,
                },
              },
              'Contact us'
            ),
            h(
              'p',
              {
                style: {
                  fontSize: '14px',
                },
              },
              'Please consult in the following ways'
            ),
          ]
        )
      "
    >
      <div class="consult-info">
        <p>008619520379048</p>
        <div class="flex items-center justify-center">
          <img :src="getNormalUrl('img10')" />
          24-hour free service hotline
        </div>
      </div>
      <div class="consult-info">
        <p>lui93522@gmail.com</p>
        <div class="flex items-center justify-center">
          <img :src="getNormalUrl('img11')" />
          Email
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script setup>
import { ref, h } from "vue";
import mainLayoutBanner from "../components/main-layout-banner.vue";
import useProductStore from "../store/product";
import { storeToRefs } from "pinia";
import { getAssetUrl, getNormalUrl } from "../utils";

const { curEquiment, curSortEquimentList } = storeToRefs(useProductStore());
const openMark = ref(false);
const handleConsultEquiment = () => {
  openMark.value = true;
};
</script>

<style>
.page-header span:first-child {
  color: #8c8c8c;
  cursor: pointer;
  padding-right: 20px;
}
.page-header span:first-child:hover {
  color: #0f5fd5;
}
.page-header span:last-child {
  color: #0f5fd5;
  padding-left: 20px;
}

.spec {
  height: 40px;
  background: rgb(15, 95, 213);
  display: inline-block;
  width: 200px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-weight: 600;
  margin-bottom: 30px;
}
.title {
  font-weight: 600;
  color: #202131;
  line-height: 56px;
  font-size: 40px;
  margin-bottom: 30px;
}
.info {
  margin-bottom: 45px;
  font-weight: 400;
  color: #8c8c8c;
  line-height: 22px;
}
.detail {
  font-weight: 600;
  color: #0f5fd5;
}

.consult-info {
  padding: 20px 0;
  text-align: center;
}
.consult-info p {
  font-size: 40px;
  font-weight: 600;
  color: #4a4a53;
  line-height: 56px;
}
.consult-info div {
  font-size: 16px;
  font-weight: 600;
  color: #4a4a53;
  line-height: 22px;
}
.consult-info img {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.consult-info:not(:last-child) {
  border-bottom: 1px solid #8c8c8c;
}

.ant-modal-content {
  padding: 0 !important;
}
.ant-modal-header {
  height: 130px;
  background: rgb(15, 95, 213) !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.ant-modal-body {
  padding: 0 20px;
}
.ant-modal-close-x {
  color: #fff;
}

td {
  height: 50px;
  padding: 5px 10px;
}
</style>
