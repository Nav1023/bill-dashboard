import { ACTION_TYPES } from '../actions/ActionTypes';

let initialState = {
  isOnline: true,
  isNetworkProblem: false,
  notificationDetails: {}
};


const AppReducer = (state = initialState, action) => {

  switch (action.type) {
    case ACTION_TYPES.NETWORK_CHANGE:
      return {
        ...state,
        isOnline: action.payload,
        isNetworkProblem: false
      };

    default:
      return state;
  }
};

export default AppReducer;