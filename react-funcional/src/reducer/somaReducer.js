import { useReducer } from "react";
const STATE_INICAIL = {
  resultato: ""
};

const somaReducer = (state = STATE_INICAIL, action) => {
  switch (action.type) {
    case "SUBTRAIR":
    case "SOMA":
      return { ...state, resultado: action.payload };
    default:
      return state;
  }
};

const useStore = () => useReducer(somaReducer, STATE_INICAIL);

export default useStore;
