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

const fingerprintNinja = () =>
  new Promise(resolve => {
    const components = Object.values(FingerprintNinja).reduce((acc, probe) => {
      try {
        return { ...acc, [probe.name]: probe() };
      } catch (e) {
        console.log(`Fingerprint.ninja: ${probe.name} failed. Stack trace: ${e}`);
        return acc;
      }
    }, {});
    const hash = murmurhash.x64.hash128(JSON.stringify(components), 999); // constant seed
    resolve({ hash, components });
  });

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
    yield put(startLibrary('FingerprintJS2'));
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
    console.log(state.fp);

    const response = yield call(fetchWrapper, 'POST', '/submit', state.fp);
    if (response.status !== 200) throw new Error(response.message);

    yield put(publishFingerprintSuccess());
    alert(`Fingerprint hash: ${state.fp.FingerprintJS2.hash}`);
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
