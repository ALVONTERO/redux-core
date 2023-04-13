// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import counterSlice from "./counter";



const store = configureStore({
  reducer: { 
    counter: counterSlice.reducer, 
    auth: authSlice.reducer 
  },
});

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
