import React from "react";
import ReactDOM from "react-dom";
// создаем хранилище данных
import { createStore } from "redux";

class App extends React.Component {
  render() {
    // первоначальное состояние
    const initialState = {
      name: "Ivan",
      secondName: "Ivanov"
    };

    // редьюсер, принимающий состояние и действие
    function reducer(state = initialState, action) {
      // смотрим какое состояние сработало. В зависимости от этого меняем первоначальное состояние
      switch (action.type) {
        case "CHANGE_NAME":
          // копируем старое состояние и меняет в нем name на новое
          return { ...state, name: action.payload };
        case "CHANGE_SECOND_NAME":
          return { ...state, secondName: action.payload };
      }

      return state;
    }

    // передаем редьюсер в переменную. Теперь всегда, когда будет меняться store, будут вызываться редьюсер и сравнивать стосяния
    const store = createStore(reducer);

    // АCTION 1
    const changeName = {
      // негласное объявление type для определения типа действия
      type: "CHANGE_NAME",
      // новое значение, которое должно передатсья в состояние
      payload: "Petr"
    };

    // АCTION 2
    const changeSecondName = {
      type: "CHANGE_SECOND_NAME",
      payload: "Petrov"
    };

    console.log(store.getState());

    // вызываем редьюсер для переменной store
    store.dispatch(changeName);

    console.log(store.getState());

    store.dispatch(changeSecondName);

    console.log(store.getState());

    return <div />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
