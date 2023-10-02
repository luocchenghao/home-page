/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-background":
          "url('https://aimg8.dlszyht.net.cn/ev_user_module_content_tmp/2018_09_18/tmp1537234373_1756221_s.jpg')",
      },
      width: {
        1280: "1280px",
        150: "150px",
        260: "260px",
        263: "263px",
        450: "450px",
        220: "220px",
        90: "90px",
      },
      minHeight: {
        100: "100px",
      },
      height: {
        150: "150px",
        100: "100px",
        300: "300px",
        800: "800px",
        40: "40px",
        90: "90px",
        500: "500px",
        320: "320px",
        48: "48px",
        56: "56px",
        255: "255px",
      },
      padding: {
        40: "40px",
        80: "80px",
        30: "30px",
        10: "10px",
        20: "20px",
      },
      gap: {
        20: "20px",
      },
      margin: {
        screen: "100vh",
        1100: "1100px",
        100: "100px",
        25: "25px",
        410: "410px",
        60: "60px",
        20: "20px",
        40: "40px",
      },
      inset: {
        800: "800px",
        90: "90px",
        86: "86px",
        60: "60px",
        40: "40px",
      },
      fontSize: {
        28: "28px",
        54: "54px",
      },
    },
  },
  plugins: [],
};
