import about from "../media/aboutSide.svg";
import products from "../media/productsSide.svg";
import home from "../media/homeSide.svg";
import aboutActive from "../media/aboutSideActive.svg";
import productsActive from "../media/productsSideActive.svg";
import homeActive from "../media/homeSideActive.svg";

export const menuItemsList = [
  {
    title: "Home",
    pic: home,
    picActive: homeActive,
    link: "/",
  },
  {
    title: "Products",
    pic: products,
    picActive: productsActive,
    link: "/products",
  },
  {
    title: "About",
    pic: about,
    picActive: aboutActive,
    link: "/about",
  },
];
