import {
  HeartIcon,
  LoginIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "./assets/icons";

export const topMessageConfig = {
  display: true,
  message: "Get 25% off this summer sale. Grab it fast!!!",
  timer: {
    display: true,
    endDate: "2024-05-06",
  },
};

export const mainMenuConfig = {
  items: [
    { label: "Man", url: "/man" },
    { label: "Woman", url: "/woman" },
    { label: "Kid", url: "/kid" },
    { label: "Shop", url: "/shop" },
    { label: "Blog", url: "/blog" },
  ],
};

export const sideMenuConfig = {
  items: [
    {
      id: "search",
      url: "/search",
      icon: SearchIcon,
    },
    {
      id: "cart",
      url: "/cart",
      icon: ShoppingCartIcon,
    },
    {
      id: "favorite",
      url: "/favorite",
      icon: HeartIcon,
    },
    {
      id: "login",
      url: "/login",
      icon: LoginIcon,
    },
  ],
};
