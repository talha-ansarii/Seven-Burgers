import { atom } from 'recoil';

export const signinState = atom({
  key: 'signinState', // unique ID (with respect to other atoms/selectors)
  default: false,         // default value (aka initial value)
});