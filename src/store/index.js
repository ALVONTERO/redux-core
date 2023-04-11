// import { createStore } from "redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };
const counterSlice= createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({reducer:counterSlice.reducer});


// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return { counter: state.counter + 1, showCounter: state.showCounter };
//     case "increase":
//       return { counter: state.counter + action.amount };
//     case "decrement":
//       return { counter: state.counter - 1 };
//     case "toggle":
//       return { counter: state.counter, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };


export default store;
