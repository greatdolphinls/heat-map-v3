import { SET_CURRENCY } from "../../constants";

export const setCurrency = currency => {
  return { type: SET_CURRENCY, payload: currency };
};
