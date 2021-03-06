module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002045",
        secondary: "#8492AA",
        accent: "#F17D21",
        modal: "rgba(0,0,0,0.5)",
        formBack: "#0076FF",
      },
      fontFamily: {
        headers: ['"Open Sans"'],
        clock: ['"Source Sans Pro"'],
        menu: ["Montserrat"],
        rubik: ["Rubik"],
        poppins: ["Poppins"],
      },
      fontSize: {
        headers: ["16px", "15px"],
        counter: ["16px", "19px"],
        fieldDesk: ["16px", "20px"],
        counterButton: ["18px", "19px"],
        dolorButton: ["19px", "18px"],
        counterClock: ["24px", "19px"],
        description: ["24px", "38px"],
        quoteBtn: ["30px", "18px"],
        counterClockMob: ["20px", "24px"],
        formHeaderMob: ["22px", "24px"],
        counterMobMotto: ["19px", "22px"],
        accordion: ["16px", "31px"],
        reviewer: ["12px", "21px"],
        needles: ["12px", "26px"],
        review: ["16px", "24px"],
        placeholder: ["17px", "30px"],
        reviewCardText: ["17px", "27px"],
        footer: ["14px", "31px"],
        viverra: ["14px", "21px"],
        terms: ["12px", "31px"],
        security: ["10px", "14px"],
        formMain: ["40px", "43px"],
        reviewCardHeader: ["21px", "27px"],
        model: ["19px", "27px"],
        cardHeader: ["28px", "36px"],
        rubik: ["25px", "30px"],
        lorem: ["20px", "30px"],
        headerDesk: ["31px", "33px"],
        mainHeader: ["60px", "78px"],
        biggest: ["65px", "70px"],
      },
      backgroundImage: {
        thumb: "url('./media/thumbnail.jpg')",
        thumbTwo: "url('./media/thumbnailTwo.png')",
        form: "url('./media/formBack.jpg')",
        formMob: "url('./media/formBackMob.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
