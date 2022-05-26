import actionTypes from "../actions/actionTypes";

const tasksState = {
  list: [],
  isLoading: false,
  error: null,
};

export const tasksReducer = (oldState = tasksState, action) => {
  if (action.type === actionTypes.ADD_TASK) {
    return {
      ...oldState,
      list: [
        ...oldState.list,
        action.payload,
        /* add new task from action.payload */
      ],
    };
  }

  return oldState;
};