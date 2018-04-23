import React from 'react';
import PropTypes from 'prop-types';

export default class DropArea extends React.Component {
  componentDidMount() {
    // send drop position
  }

  render() {
    return <div className="dropArea">
      {this.props.dropArea.node}
    </div>;
  }
}

DropArea.propTypes = {
  dropArea: PropTypes.object.isRequired
};
