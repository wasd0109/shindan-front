import {
  CHANGE_ROUTE_TO_QUESTION,
  CHANGE_ROUTE_TO_RESULT,
  ADD_SCORE,
  REMOVE_SCORE,
  NEXT_QUESTION,
  PREVIOUS_QUESTION,
  GET_QUESTION_PENDING,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAILED,
} from "./constants";

export const setRouteToQuestion = () => ({
  type: CHANGE_ROUTE_TO_QUESTION,
  payload: "question",
});

export const setRouteToResult = () => ({
  type: CHANGE_ROUTE_TO_RESULT,
  payload: "result",
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

export const onClickFinalAnswer = (event) => (dispatch) => {
  dispatch(addScore(event));
  dispatch(setRouteToResult());
};

export const backClick = () => (dispatch) => {
  dispatch(removeScore());
  dispatch(previousQuestion());
};

export const getQuestions = () => (dispatch) => {
  dispatch({ type: GET_QUESTION_PENDING });
  fetch("https://shindan-back.herokuapp.com/questions")
    .then((resp) => resp.json())
    .then((questions) =>
      dispatch({ type: GET_QUESTION_SUCCESS, payload: questions })
    )
    .catch((err) => dispatch({ type: GET_QUESTION_FAILED, payload: err }));
};
