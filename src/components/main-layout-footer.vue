<template>
  <div
    class="w-full bg-[url('http://cdn.huaqu.club/img/f7e5d8cead7a13472e836589271927a6e3ed5b91d860a-2Cll5b.webp')]"
  >
    <div class="w-1280 m-auto h-500 flex items-center flex-row">
      <div data-aos="fade-right" class="basis-1/2 need-line">
        <p class="footer-box1">Contact us</p>
        <div class="footer-box2">
          <img
            src="http://cdn.huaqu.club/img/a344bdc76aebefea90fb55e17253441c920658d93c4-vpUMuZ.webp"
          />
          <input type="text" placeholder="Please enter your name." />
        </div>
        <div class="footer-box2">
          <img
            src="http://cdn.huaqu.club/img/c07e651ea9009e671974baae250bc92f3f124c5d159-9FTdZw.webp"
          />
          <input
            type="text"
            placeholder="Please enter your mobile phone number."
          />
        </div>
        <div class="footer-box2">
          <img
            src="http://cdn.huaqu.club/img/39be9cfc113146ba8b8bd5d4335b6a9fb8d5664725c-eWXf0z.webp"
          />
          <input type="text" placeholder="Please enter your email address." />
        </div>
        <div class="footer-box2">
          <img
            src="http://cdn.huaqu.club/img/624696d51806f8e8e617768fab546fb1a98837761ec-DqOxjG.webp"
          />
          <input
            type="text"
            placeholder="Description of requirements (optional)"
          />
        </div>
        <button class="footer-button">Submit an application</button>
      </div>
      <div
        data-aos="fade-left"
        class="basis-1/2 flex flex-col items-center justify-center"
      >
        <img
          class="w-263 h-56 mb-60"
          src="http://cdn.huaqu.club/img/5e791bd92de56315901efbbbcbb75dafcfa932466d19-v3nPcH.webp"
        />
        <div class="mb-20 footer-text1 px-40">
          <p>
            Newcom provides you with information about what is applicable to
            your industry.
          </p>
          <p>Resolutions</p>
        </div>
        <p class="footer-text2">
          Professional one-on-one service, providing the best product for you
        </p>
      </div>
    </div>
  </div>
  <div
    class="bg-black h-255 flex items-center"
    style="border-bottom: 1 solid #545454"
  >
    <div class="w-1280 m-auto h-150 flex justify-between">
      <div class="flex flex-col justify-between" data-aos="fade-right">
        <img
          class="w-263"
          src="http://cdn.huaqu.club/img/9158ddd4591197f8ab6307366f14edce88a7a8e55073-BxXOgt.webp"
        />
        <div class="text-white flex" style="justify-content: inherit">
          <span
            class="hover:cursor-pointer"
            v-for="item in routers"
            :key="item.url"
            @click="handleTapRouter(item.url, item.title)"
          >
            {{ item.title }}
          </span>
        </div>
      </div>
      <div
        class="footer-box3 flex flex-col justify-between items-end"
        data-aos="fade-left"
      >
        <p>400-8710-555</p>
        <p>24-hour free service hotline</p>
        <div class="flex items-center">
          <img
            src="http://cdn.huaqu.club/img/e1a15dcbaa32f67fb0c6ec5b53b925ea1e5cd9a1662-XEsV4I.webp"
          />
          niukang_wk@163.com
        </div>
      </div>
    </div>
  </div>
  <div style="line-height: 100px" class="h-100 bg-black text-white text-center">
    COPYRIGHT © 2023 SOLPAC RIGHTS RESERVED
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const routers = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/product-center",
    title: "Product center",
  },
  {
    url: "/contact-us",
    title: "About us",
  },
];

const handleTapRouter = (url, title) => {
  router.push({ path: url });
  document.title = title;
};
</script>

<style scoped>
.footer-box1 {
  padding-bottom: 30px;
  font-size: 28px;
  font-weight: 500;
  color: #202131;
  line-height: 26px;
}
.footer-box2 {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(193, 193, 201, 0.5);
  margin-bottom: 30px;
  padding-bottom: 10px;
}
.footer-box2 img {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}
.footer-box2 input {
  outline: none;
  background: transparent;
  width: 100%;
}
.footer-button {
  width: 450px;
  height: 48px;
  background: #0f5fd5;
  border-radius: 4px;
  color: #fff;
}
.need-line {
  padding-right: 80px;
  position: relative;
}
.need-line::after {
  content: "";
  width: 1px;
  height: 80%;
  position: absolute;
  right: 0;
  top: 10%;
  background-color: rgba(193, 193, 201, 0.5);
}
.footer-text1 {
  font-size: 20px;
  color: #4a4a53;
  text-align: center;
}
.footer-text2 {
  color: #909097;
}
.footer-box3 div {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  line-height: 22px;
}
.footer-box3 div img {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.footer-box3 p:first-child {
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;
  line-height: 56px;
}
.footer-box3 p:nth-child(2) {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  line-height: 22px;
}
</style>
