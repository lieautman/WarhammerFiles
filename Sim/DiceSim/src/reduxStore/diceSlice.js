import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dice: [{ faces: 6, result: 0 }]
};

export const diceSlice = createSlice({
  name: "dice",
  initialState,
  reducers: {
    roll: (state) => {
      state.dice.forEach((el) => {
        el.result = Math.trunc(Math.random() * el.faces + 1);
      });
    },
    changeDiceNo: (state, action) => {
      const dices = Array.from({ length: action.payload }, () => ({
        faces: 6,
        result: 0
      }));
      state.dice = dices;
    }
  }
});

export const { roll, changeDiceNo } = diceSlice.actions;

export const selectDice = (state) => state.dice;

export default diceSlice.reducer;
