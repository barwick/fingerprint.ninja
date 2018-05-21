import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Code from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/styles/hljs';

const Container = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 50px;
`;

const Title = styled.span`
  width: 90%;
`;

const Arrow = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin: 5px 0px 0px 15px;

  transform: ${props => (props.expanded ? 'rotate(225deg)' : 'rotate(45deg)')};
  -webkit-transform: ${props => (props.expanded ? 'rotate(225deg)' : 'rotate(45deg)')};
`;

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggleAccordion() {
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  }

  render() {
    const { title, value } = this.props;
    const { expanded } = this.state;
    return (
      <div>
        <Container onClick={() => this.toggleAccordion()}>
          <Title>{title}</Title>
          <Arrow expanded={expanded} />
        </Container>
        {expanded && (
          <Code language="json" style={github}>
            {value}
          </Code>
        )}
      </div>
    );
  }
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Accordion;
