import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProbesComponent from './component';
import { publishFingerprint } from './actions';

const mapStateToProps = state => ({
  fingerprint: state.fingerprint,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      publishFingerprint,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProbesComponent);
