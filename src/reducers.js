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
  GET_AVERAGE_PENDING,
  GET_AVERAGE_SUCCESS,
  GET_AVERAGE_FAILED,
} from "./constants";

const initialStateRoute = {
  route: "start",
};

export const setRoute = (state = initialStateRoute, action = {}) => {
  switch (action.type) {
    case CHANGE_ROUTE_TO_QUESTION:
    case CHANGE_ROUTE_TO_RESULT:
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

const initialStateQuestions = {
  questions: [],
  noOfQuestions: 0,
  error: false,
};

export const getQuestions = (state = initialStateQuestions, action = {}) => {
  switch (action.type) {
    case GET_QUESTION_PENDING:
      return Object.assign({}, state, {});
    case GET_QUESTION_SUCCESS:
      return Object.assign({}, state, {
        questions: action.payload,
        noOfQuestions: action.payload.length,
      });
    case GET_QUESTION_FAILED:
      return Object.assign({}, state, { error: true });
    default:
      return state;
  }
};

const initialStateAverage = {
  average: 0,
};

export const getAverage = (state = initialStateAverage, action = {}) => {
  switch (action.type) {
    case GET_AVERAGE_PENDING:
      return Object.assign({}, state, {});
    case GET_AVERAGE_SUCCESS:
      return Object.assign({}, state, {
        average: action.payload,
      });
    case GET_AVERAGE_FAILED:
    default:
      return state;
  }
};
