import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import exitButtonIcon from 'static/exitButton.png';

const OpenButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  height: 20px;
  margin-top: 10px;

  appearance: none;
  outline: none;
  cursor: pointer;
  text-decoration: underline;
`;

const ExitButton = styled.input`
  appearance: none;
  outline: none;
  cursor: pointer;
  width: 15px;
  height: 15px;
  position: relative;
  float: right;
  margin: -5px -5px 0 0;
`;

const Body = styled.div`
  margin-bottom: 5px;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginTop: '-20px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '70%',
    maxHeight: '80%',
    textAlign: 'justify',
  },
};

class Modal extends Component {
  static propTypes = {
    openByDefault: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    buttonText: PropTypes.string.isRequired,
  };

  static defaultProps = {
    openByDefault: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: props.openByDefault,
    };
  }

  componentWillMount() {
    ReactModal.setAppElement('#app');
  }

  toggleModal(open = !this.state.open) {
    this.setState({ open: !!open });
  }

  render() {
    const { children, buttonText } = this.props;
    return (
      <div>
        <OpenButton onClick={() => this.toggleModal(true)}>{buttonText}</OpenButton>
        <ReactModal
          isOpen={this.state.open}
          onRequestClose={() => this.toggleModal(false)}
          style={customStyles}
          contentLabel="'About' modal"
        >
          <ExitButton
            type="image"
            src={exitButtonIcon}
            alt="Exit button"
            onClick={() => this.toggleModal()}
          />
          <Body>{children}</Body>
        </ReactModal>
      </div>
    );
  }
}

export default Modal;
