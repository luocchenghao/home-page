<template>
  <div class="w-full" style="background-color: rgba(227, 230, 240)">
    <div class="w-1280 m-auto h-500 flex items-center flex-row">
      <div data-aos="fade-right" class="basis-1/2 need-line">
        <p class="footer-box1">Contact us</p>
        <div class="footer-box2">
          <img :src="getNormalUrl('img16')" />
          <input type="text" placeholder="Please enter your name." />
        </div>
        <div class="footer-box2">
          <img :src="getNormalUrl('img17')" />
          <input
            type="text"
            placeholder="Please enter your mobile phone number."
          />
        </div>
        <div class="footer-box2">
          <img :src="getNormalUrl('img18')" />
          <input type="text" placeholder="Please enter your email address." />
        </div>
        <div class="footer-box2">
          <img :src="getNormalUrl('img19')" />
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
        <img class="w-263 h-56 mb-60" :src="getNormalUrl('img20')" />
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
        <img class="w-263" :src="getNormalUrl('img21')" />
        <div class="text-white flex" style="justify-content: inherit">
          Our purpose
        </div>
        <div class="text-white flex" style="justify-content: inherit">
          Integrity management, customer-centered and dedicated service
        </div>
      </div>
      <div
        class="footer-box3 flex flex-col justify-between items-end"
        data-aos="fade-left"
      >
        <p>008619520379048</p>
        <p>24-hour free service hotline</p>
        <div class="flex items-center">
          <img :src="getNormalUrl('img11')" />
          lui93522@gmail.com
        </div>
      </div>
    </div>
  </div>
  <div style="line-height: 100px" class="h-100 bg-black text-white text-center">
    COPYRIGHT © 2023 SOLPAC RIGHTS RESERVED
  </div>
</template>

<script setup>
import { getNormalUrl } from "../utils";
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
