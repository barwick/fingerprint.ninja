import { ADD_RESULT_SUCCESS, PUBLISH_FINGERPRINT_SUCCESS } from './actions';

const getInitialState = () => ({});

const fingerprintReducer = (state = getInitialState(), action) => {
  switch (action && action.type) {
    case ADD_RESULT_SUCCESS:
      return {
        ...state,
        ...action.result,
      };
    case PUBLISH_FINGERPRINT_SUCCESS:
      return getInitialState();
    default:
      return state;
  }
};

export default fingerprintReducer;
