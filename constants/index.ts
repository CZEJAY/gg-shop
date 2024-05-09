import { HomeIcon, List, ShoppingCart, User } from "lucide-react";

export const sidebarLinks = [
    {
      imgURL: "/assets/home.svg",
      icon: HomeIcon,
      route: "/",
      label: "Home",
    },
    {
      imgURL: "/assets/search.svg",
      icon: List,
      route: "/categories",
      label: "Category",
    },
    {
      imgURL: "/assets/heart.svg",
      icon: ShoppingCart,
      route: "/cart",
      label: "Cart",
    },
    {
      imgURL: "/assets/user.svg",
      icon: User,
      route: "/profile",
      label: "Account",
    },
  ];
  
  export const profileTabs = [
    { value: "mates", label: "Posts", icon: "/assets/reply.svg" },
    { value: "friends", label: "Friends", icon: "/assets/members.svg" },
    { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
  ];
  
  export const communityTabs = [
    { value: "mates", label: "Posts", icon: "/assets/reply.svg" },
    { value: "members", label: "Members", icon: "/assets/members.svg" },
    { value: "requests", label: "Requests", icon: "/assets/request.svg" },
  ];