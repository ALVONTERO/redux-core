// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { auth: false };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const AuthSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.auth(true);
    },

    logout(state) {
      state.auth(false);
    },
  },
});

export const counterActions = counterSlice.actions;
export const authActions = AuthSlice.actions;


const store = configureStore({
  reducer: { 
    counter: counterSlice.reducer, 
    auth: AuthSlice.reducer 
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
