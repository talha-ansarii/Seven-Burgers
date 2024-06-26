import { atom } from "recoil";

export const latestBlogsState = atom({
  key: "Bloggggss", // unique ID (with respect to other atoms/selectors)
  default: "Oldest", // default value (aka initial value)
});
