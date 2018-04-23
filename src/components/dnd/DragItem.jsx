import React from 'react';
import PropTypes from 'prop-types';


export default class DragItem extends React.Component {
  componentDidMount() {
    // send drag item position
  }

  onStartDrag() {
    // drag start
  }

  onMoveItem() {
    // move item
  }

  onDragEnd() {
    // end drag
  }

  render() {
    return <div
      className="dragItem"
      onMouseDown={this.onStartDrag.bind(this)}
      onMouseMove={this.onMoveItem.bind(this)}
      onMouseUp={this.onDragEnd.bind(this)}>
      {this.props.dragItem.node}
    </div>;
  }
}

DragItem.propTypes = {
  dragItem: PropTypes.object.isRequired
};
