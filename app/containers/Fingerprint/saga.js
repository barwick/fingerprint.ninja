import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import fetchWrapper from 'app/fetch';

import {
  publishFingerprintFail,
  publishFingerprintSuccess,
  PUBLISH_FINGERPRINT_REQUEST,
} from './actions';

export function* publishFingerprintWorker({ fp }) {
  try {
    // TODO: check 200 status - maybe throw error in wrapper for non 200s?
    /* eslint-disable-next-line no-unused-vars */
    const response = yield call(fetchWrapper, 'POST', '/fp', fp);
    yield put(publishFingerprintSuccess());
  } catch (error) {
    yield put(publishFingerprintFail(error));
  }
}

export function* publishFingerprintWatcher() {
  yield* takeLatest(PUBLISH_FINGERPRINT_REQUEST, publishFingerprintWorker);
}
