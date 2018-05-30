import {
  START_LIBRARY,
  STOP_LIBRARY,
  PUBLISH_FINGERPRINT_SUCCESS,
  PUBLISH_FINGERPRINT_FAIL,
} from './actions';

const getInitialState = () => ({
  loading: [],
  fp: {},
  success: false,
  error: false,
});

const fingerprintReducer = (state = getInitialState(), action) => {
  switch (action && action.type) {
    case START_LIBRARY:
      return {
        ...state,
        loading: [...state.loading, action.library],
      };
    case STOP_LIBRARY: {
      const index = state.loading.indexOf(action.library);
      return {
        ...state,
        loading: [...state.loading.slice(0, index), ...state.loading.slice(index + 1)],
        fp: { ...state.fp, [action.library]: action.fingerprint },
      };
    }
    case PUBLISH_FINGERPRINT_SUCCESS:
      return { ...getInitialState(), success: true };
    case PUBLISH_FINGERPRINT_FAIL:
      return { ...getInitialState(), error: true };
    default:
      return state;
  }
};

export default fingerprintReducer;
