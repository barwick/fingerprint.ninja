/* eslint-disable no-console */
import { put, call, select } from 'redux-saga/effects';
import { takeLatest, takeEvery, delay } from 'redux-saga';

import FingerprintJS2 from 'fingerprintjs2';
import { v3 as murmurhash } from 'murmur-hash';

import * as FingerprintNinja from 'lib/probes';
import fetchWrapper from 'app/fetch';

import {
  publishFingerprintFail,
  publishFingerprintSuccess,
  PUBLISH_FINGERPRINT_REQUEST,
  startLibrary,
  START_LIBRARY,
  stopLibrary,
  STOP_LIBRARY,
} from './actions';

const fingerprintNinja = async () => {
  const components = await Promise.all(Object.values(FingerprintNinja).map(async p => p()));
  const hash = murmurhash.x64.hash128(components.join(';'), 999); // constant seed
  return { hash, components };
};

const fingerprintjs2 = () =>
  new Promise(resolve => {
    new FingerprintJS2().get((hash, components) => {
      resolve({ hash, components });
    });
  });

const libraries = {
  FingerprintNinja: fingerprintNinja,
  FingerprintJS2: fingerprintjs2,
};

export function* publishFingerprintWorker() {
  try {
    yield delay(100); // Delay by 0.1s for consistent fingerprints
    yield put(startLibrary('FingerprintNinja'));
    // FPJS2 currently interfering with something bizarre
    // yield put(startLibrary('FingerprintJS2'));
  } catch (e) {
    console.log(e);
  }
}

function* startLibraryWorker({ library }) {
  try {
    const fingerprint = yield call(libraries[library]);
    yield put(stopLibrary({ library, fingerprint }));
  } catch (e) {
    yield put(stopLibrary({ library }));
    console.log(e);
  }
}

function* stopLibraryWorker() {
  try {
    const state = (yield select()).fingerprint;
    if (state.loading.length > 0) return;

    const hashComponents = Object.keys(FingerprintNinja).reduce((acc, k, i) => {
      acc[k] = state.fp.FingerprintNinja.components[i];
      return acc;
    }, {});

    console.log(state.fp.FingerprintNinja.hash);
    console.log(hashComponents);

    const response = yield call(fetchWrapper, 'POST', '/submit', state.fp);
    if (response.status !== 200) throw new Error(response.message);

    yield put(publishFingerprintSuccess());
    alert(`Fingerprint hash: ${state.fp.FingerprintNinja.hash}`);
  } catch (e) {
    console.log(e);
    yield put(publishFingerprintFail());
  }
}

export function* publishFingerprintWatcher() {
  yield* takeLatest(PUBLISH_FINGERPRINT_REQUEST, publishFingerprintWorker);
}

export function* startLibraryWatcher() {
  yield* takeEvery(START_LIBRARY, startLibraryWorker);
}

export function* stopLibraryWatcher() {
  yield* takeLatest(STOP_LIBRARY, stopLibraryWorker);
}
