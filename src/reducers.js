import {
  CHANGE_ROUTE_TO_QUESTION,
  ADD_SCORE,
  REMOVE_SCORE,
  NEXT_QUESTION,
  PREVIOUS_QUESTION,
} from "./constants";

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
  console.log(state);
  switch (action.type) {
    case ADD_SCORE:
      state.scores.push(action.payload);
      return Object.assign({}, state, {
        scores: state.scores,
      });
    case REMOVE_SCORE:
      state.scores.pop();
      return Object.assign({}, state, {
        scores: state.scores,
      });
    default:
      return state;
  }
};

const initialStateCurrentQuestion = {
  currentQuestion: 0,
};

export const setQuestion = (
  state = initialStateCurrentQuestion,
  action = {}
) => {
  console.log(action);
  switch (action.type) {
    case NEXT_QUESTION:
      return Object.assign({}, state, {
        currentQuestion: ++state.currentQuestion,
      });
    case PREVIOUS_QUESTION:
      return state.currentQuestion
        ? Object.assign({}, state, {
            currentQuestion: --state.currentQuestion,
          })
        : state;
    default:
      return state;
  }
};
