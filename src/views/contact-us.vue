<template>
  <main-layout-banner :type="'product'" :url="'img7'"></main-layout-banner>
  <div class="mt-410 py-80">
    <div class="w-full">
      <div class="w-1280 m-auto">
        <div
          style="border-bottom: 1px solid #8c8c8c"
          class="pb-40 text-center"
          data-aos="fade-up"
        >
          <p class="font-semibold text-54" style="line-height: 75px">
            <span style="color: #0f5fd5">A</span>
            <span style="color: #8c8c8c">BOUT US</span>
          </p>
          <p class="font-semibold text-28" style="line-height: 40px">
            About us
          </p>
        </div>
        <div class="flex mt-20">
          <div class="basis-1/2">
            <img
              data-aos="fade-right"
              class="w-full"
              :src="getNormalUrl('img5')"
            />
          </div>
          <div class="basis-1/2 flex flex-col px-40 justify-center bg-white">
            <p class="title pb-20" data-aos="fade-left">HYJX Co., Ltd.</p>
            <p class="info pb-20" data-aos="fade-left">
              HYJX Responsibility Co., Ltd. is a modern technology enterprise
              specializing in the research and development of food processing
              machinery manufacturing and mechanical equipment solutions. It is
              committed to building food processing equipment with advanced
              technology, excellent performance, precision and reliability, and
              high cost performance. At the beginning of its establishment, it
              integrates scientific research, manufacturing and sales. Since its
              development, it has established a perfect scientific research and
              innovation system, equipment production system and service
              management system, and accumulated profound technical strength and
              manufacturing experience.
            </p>
            <p class="info" data-aos="fade-left">
              Over the years, we have closely followed market development and
              customer needs, continuously upgraded product technology and
              service capabilities to help customers improve production
              efficiency and reduce production costs to a greater extent.
              Existing (representative products) and other equipment are sold
              through sales channels to more than 30 cities in China, and
              exported to dozens of countries and regions around the world. A
              total of 10,000 sets of equipment have been sold and more than 500
              customers around the world have been served. With advanced
              equipment, excellent product quality and perfect after-sales
              service, it has won wide praise from customers at home and abroad.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full pt-80">
        <div class="w-1280 m-auto">
          <main-layout-tabbar
            :list="[{ title: 'Corporate values' }]"
            :cur-index="0"
          ></main-layout-tabbar>
        </div>
        <div class="grid grid-cols-4 mt-20">
          <div
            class="relative"
            v-for="item in corporateValues"
            :key="item.title"
            data-aos="fade-left"
          >
            <img :src="getNormalUrl(item.picUrl)" />
            <div class="absolute left-40 bottom-60">
              <p
                class="pb-20 text-white"
                style="font-size: 28px; font-weight: 600"
              >
                {{ item.title }}
              </p>
              <p class="text-white">
                {{ item.subTitle }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getNormalUrl } from "../utils";

const corporateValues = ref([
  {
    picUrl: "img12",
    title: "Our mission",
    subTitle:
      "Committed to national construction and building a beautiful home together",
  },
  {
    picUrl: "img13",
    title: "Our vision",
    subTitle:
      "Become a first-class construction machinery service provider in China",
  },
  {
    picUrl: "img14",
    title: "Our philosophy",
    subTitle: "Customer satisfaction is the reason for our existence.",
  },
  {
    picUrl: "img15",
    title: "Our purpose",
    subTitle: "Integrity management, customer-centered and dedicated service",
  },
]);
</script>

<style scoped>
.title {
  font-weight: 600;
  color: #202131;
  line-height: 56px;
  font-size: 40px;
}
.info {
  font-weight: 400;
  color: #8c8c8c;
  line-height: 22px;
}
</style>
