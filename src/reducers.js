import { CHANGE_ROUTE_TO_QUESTION } from "./constants";

const initialStateRoute = {
  route: "start",
};

export const setRoute = (state = initialStateRoute, action = {}) => {
  switch (action.type) {
    case CHANGE_ROUTE_TO_QUESTION:
      return Object.assign({}, state, { route: action.payload });
    default:
      return state;
  }
};
