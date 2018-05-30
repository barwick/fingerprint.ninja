import { fork } from 'redux-saga/effects';

import {
  publishFingerprintWatcher,
  startLibraryWatcher,
  stopLibraryWatcher,
} from 'app/containers/Fingerprint/saga';

export default function* () {
  yield fork(publishFingerprintWatcher);
  yield fork(startLibraryWatcher);
  yield fork(stopLibraryWatcher);
}
