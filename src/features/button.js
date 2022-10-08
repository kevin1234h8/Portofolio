import { createSlice } from "@reduxjs/toolkit";

initialState = {
  buttons: [],
  isClick: true,
};

const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    selectedButton: (state, action) => {
      selectedButton;
    },
  },
});
