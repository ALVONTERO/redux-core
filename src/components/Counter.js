// import { useSelector, useDispatch, connect } from "react-redux";
// import classes from "./Counter.module.css";

// const Counter = () => {
//   const counter = useSelector((state) => state.counter);
//   const dispatch = useDispatch();
//   const toggleCounterHandler = () => {};

//   const incrementHandler = () => {
//     dispatch({ type: "increment" });
//   };

//   const decrementHandler = () => {
//     dispatch({ type: "decrement" });
//   };
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };




//Redux with Class-based Components

import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Counter.module.css";
class Counter extends Component {
  incrementHandler = () => {
    this.props.increment();
  };
  decrementHandler = () => {
    this.props.decrement();
  };
  toggleCounterHandler = () => {};

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dipatch) => {
  return {
    increment: () => dipatch({ type: "increment" }),
    decrement: () => dipatch({ type: "decrement" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
