export const ADD_RESULT_REQUEST = 'ADD_RESULT_REQUEST';
export const ADD_RESULT_SUCCESS = 'ADD_RESULT_SUCCESS';
export const ADD_RESULT_FAIL = 'ADD_RESULT_FAIL';

export const PUBLISH_FINGERPRINT_REQUEST = 'PUBLISH_FINGERPRINT_REQUEST';
export const PUBLISH_FINGERPRINT_SUCCESS = 'PUBLISH_FINGERPRINT_SUCCESS';
export const PUBLISH_FINGERPRINT_FAIL = 'PUBLISH_FINGERPRINT_FAIL';

export const addResult = result => ({
  type: ADD_RESULT_REQUEST,
  result,
});

export const addResultSuccess = result => ({
  type: ADD_RESULT_SUCCESS,
  result,
});

export const addResultFail = error => ({
  type: ADD_RESULT_FAIL,
  error,
});

export const publishFingerprint = fp => ({
  type: PUBLISH_FINGERPRINT_REQUEST,
  fp,
});

export const publishFingerprintSuccess = () => ({
  type: PUBLISH_FINGERPRINT_SUCCESS,
});

export const publishFingerprintFail = error => ({
  type: PUBLISH_FINGERPRINT_FAIL,
  error,
});
