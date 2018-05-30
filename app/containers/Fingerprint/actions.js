export const PUBLISH_FINGERPRINT_REQUEST = 'PUBLISH_FINGERPRINT_REQUEST';
export const PUBLISH_FINGERPRINT_SUCCESS = 'PUBLISH_FINGERPRINT_SUCCESS';
export const PUBLISH_FINGERPRINT_FAIL = 'PUBLISH_FINGERPRINT_FAIL';

export const START_LIBRARY = 'START_LIBRARY';
export const STOP_LIBRARY = 'STOP_LIBRARY';

export const publishFingerprint = () => ({
  type: PUBLISH_FINGERPRINT_REQUEST,
});

export const publishFingerprintSuccess = () => ({
  type: PUBLISH_FINGERPRINT_SUCCESS,
});

export const publishFingerprintFail = () => ({
  type: PUBLISH_FINGERPRINT_FAIL,
});

export const startLibrary = library => ({
  type: START_LIBRARY,
  library,
});

export const stopLibrary = ({ library, fingerprint }) => ({
  type: STOP_LIBRARY,
  library,
  fingerprint,
});
