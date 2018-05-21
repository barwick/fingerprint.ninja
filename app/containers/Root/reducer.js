import { combineReducers } from 'redux';

import FingerprintReducer from 'app/containers/Fingerprint/reducer';

export default combineReducers({ fingerprint: FingerprintReducer });
