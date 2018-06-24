import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProbesComponent from './component';
import { publishFingerprint } from './actions';

const mapStateToProps = state => ({
  loading: state.fingerprint.loading,
  success: state.fingerprint.success,
  error: state.fingerprint.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      publishFingerprint,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProbesComponent);
