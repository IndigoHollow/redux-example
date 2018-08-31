import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

class App extends React.Component {
  render() {
    const initialState = {
      name: "Ivan",
      secondName: "Ivanov"
    };

    function reducer(state = initialState, action) {
      switch (action.type) {
        case "CHANGE_NAME":
          return { ...state, name: action.payload };
        case "CHANGE_SECOND_NAME":
          return { ...state, secondName: action.payload };
      }

      return state;
    }

    const store = createStore(reducer);

    const changeName = {
      type: "CHANGE_NAME",
      payload: "Petr"
    };

    const changeSecondName = {
      type: "CHANGE_SECOND_NAME",
      payload: "Petrov"
    };

    console.log(store.getState());

    store.dispatch(changeName);

    console.log(store.getState());

    store.dispatch(changeSecondName);

    console.log(store.getState());

    return <div />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
