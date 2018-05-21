import { fork } from 'redux-saga/effects';

import { publishFingerprintWatcher } from 'app/containers/Fingerprint/saga';

export default function* () {
  yield fork(publishFingerprintWatcher);
}
