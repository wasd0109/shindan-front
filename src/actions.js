import {
  CHANGE_ROUTE_TO_QUESTION,
  ADD_SCORE,
  REMOVE_SCORE,
  NEXT_QUESTION,
  PREVIOUS_QUESTION,
} from "./constants";

export const setRouteToQuestion = () => ({
  type: CHANGE_ROUTE_TO_QUESTION,
  payload: "question",
});

const addScore = (event) => ({
  type: ADD_SCORE,
  payload: Number(event.currentTarget.id),
});

export const removeScore = () => ({
  type: REMOVE_SCORE,
});

const nextQuestion = () => ({
  type: NEXT_QUESTION,
});

export const previousQuestion = () => ({
  type: PREVIOUS_QUESTION,
});

export const answerClick = (event) => (dispatch) => {
  dispatch(addScore(event));
  dispatch(nextQuestion());
};

export const backClick = () => (dispatch) => {
  dispatch(removeScore());
  dispatch(previousQuestion());
};
