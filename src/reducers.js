import { CHANGE_ROUTE_TO_QUESTION, ADD_SCORE } from "./constants";

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

const initialStateScore = {
  scores: [],
};

export const setScore = (state = initialStateScore, action = {}) => {
  switch (action.type) {
    case ADD_SCORE:
      return Object.assign({}, state, {
        score: state.scores.push(action.payload),
      });
    default:
      return state;
  }
};
