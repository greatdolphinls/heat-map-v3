import { SET_CURRENCY } from "../constants";

const initialState = {
  currency: "king arthur"
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCY:
      return {
        ...state,
        currency: action.payload
      };
    default:
      return state;
  }
};

export default settingReducer;
