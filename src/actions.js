import { CHANGE_ROUTE_TO_QUESTION, ADD_SCORE } from "./constants";

export const setRouteToQuestion = () => ({
  type: CHANGE_ROUTE_TO_QUESTION,
  payload: "question",
});

export const addScore = (event) => ({
  type: ADD_SCORE,
  payload: Number(event.currentTarget.id),
});
