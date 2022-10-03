import Cuisine from "../components/interfaces/Cuisine";
import { Categories } from "./categories";

export const NavbarItemsNames = {
  HOME: "Home",
  BROWSE: "Browse",
  DISHES: "Dishes"
};

export const TabItemsNames = {
  QUICKANDEASY: "QUICK_AND_EASY",
  KIDFRIENDLY: "KID_FRIENDLY",
  MAINDISH: "MAIN_DISH",
  DESSERTS: "DESSERTS",
  APPETIZERS: "APPETIZERS",
  SALADS: "SALADS",
  VEGETARIAN: "VEGETARIAN",
  SIDEDISH: "SIDE_DISH",
};

export const Dishes = {
  cake: {
    name: "Cake",
    tag: Categories.CAKE,
  },
  cookie: {
    name: "Cookie",
    tag: Categories.COOKIE,
  },
  pie: {
    name: "Pie",
    tag: Categories.PIE,
  },
  sandwich: {
    name: "Sandwich",
    tag: Categories.SANDWICH,
  },
  pizza: {
    name: "Pizza",
    tag: Categories.PIZZA,
  },
  burger: {
    name: "Burger",
    tag: Categories.BURGER,
  },
  pancake: {
    name: "Pancake",
    tag: Categories.PANCAKE,
  },
  brownie: {
    name: "Brownie",
    tag: Categories.BROWNIE,
  },
  lasagna: {
    name: "Lasagna",
    tag: Categories.LASAGNA,
  },
};

export const Cuisines: Cuisine[] = [
  {
    displayName: "American",
    iconImage:
      "https://lh3.googleusercontent.com/Xbw-2m9utpEabJC6yzDb1hRjVr5tVg_CHfWoJ5DfBo639tQD8GaRzetk2WocZy4EAtpQHZKFiYDSi-gWDKaNDQ",
    tag: Categories.AMERICAN,
  },
  // {
  //   displayName: "Asian",
  //   iconImage:
  //     "https://lh3.googleusercontent.com/8eRtqal5reIDYCfFEWOSW9M39bKBUlm6yuempjGbLdZ9AxlD81CiAcM9ioBrNmYimit6T63b7U6zuAsXrFKtIQ",
  //   tag: Categories.ASIAN,
  // },
  {
    displayName: "Italian",
    iconImage:
      "https://lh3.googleusercontent.com/rHIb_lTyZNs99aLDZi8gV8C_mUo9fhvP3PWIkWes8GkLX8mHA5WeYiB3vPPyRsQFyBwdwoJ5iIZWTFcEzR836A",
    tag: Categories.ITALIAN,
  },
  {
    displayName: "French",
    iconImage:
      "https://lh3.googleusercontent.com/Sy6DK1USAKjdQnrT0HzFb1FcPG7sRQA1pJX4cpgw3dATaZ9VjGbTjPfitoLLadPQbJRrfdHWxGpZYNdu77GP",
    tag: Categories.FRENCH,
  },
  {
    displayName: "English",
    iconImage:
      "https://lh3.googleusercontent.com/gMnhs_JEtwSs5kxysuDT1_4V1yoC9U4P123DXDf-WF5mxIEYt0ghznsDimAZ3chlRU921VcdmZn49yK3MRZSvw",
    tag: Categories.ENGLISH,
  },
  {
    displayName: "Chinese",
    iconImage:
      "https://lh3.googleusercontent.com/EDIKeaEHzgzANTJqY9qAzOoc8WX3L9r6ClS2ZTIhslE5ay19kJsQJ1tf625T6pv7TL7we9Sec0pS-PaLVTOP5g",
    tag: Categories.CHINESE,
  },
  {
    displayName: "Japanese",
    iconImage:
      "https://lh3.googleusercontent.com/_DvlluBS8tLt5Dfogx8lri-LFihIwigYPilWKDs2yP6fovel_qN3WnM_xJI_f8yHofssqZWNIwR5EPD8QwUT",
    tag: Categories.JAPANESE,
  },
  {
    displayName: "Swedish",
    iconImage:
      "https://lh3.googleusercontent.com/16A8OOPtMfCUDCuWHKyncZnbymPJ9o-7eBtJDdWrP0L9Cgm5VMEyI6znZi9qBddy_mHotPC7LdhXtFX0NS5w0Q",
    tag: Categories.SWEDISH,
  },
  {
    displayName: "German",
    iconImage:
      "https://lh3.googleusercontent.com/2cNCLGd-hJCyTS7Q5Mb9UijZan8t_v1rWLe1q1hNhjTNbPqp2S2vTD1Yh8MMQxLeG0lD96BZ8ziC9BO5d2dv",
    tag: Categories.GERMAN,
  },
  {
    displayName: "Irish",
    iconImage:
      "https://lh3.googleusercontent.com/Ocn4VHvuHuFhUvS3DSt8k6hNZjfMXQ3wrnEifRujPQ_CYAJ7l5J_2JfoUb7erU77RtODJK-2uD8gRLZEUU8iuQ",
    tag: Categories.IRISH,
  },
  {
    displayName: "Greek",
    iconImage:
      "https://lh3.googleusercontent.com/HXdKWAnBLGTYdonNQ9-Q3-M-qLdV04m1KEiNw4RfgxCdP4ZNPKqmVUoBzqGhutP3jhULthneT7D9Yhy3Zy_18yc",
    tag: Categories.GREEK,
  },
];
