import './CollapseBox.less';
import React from 'react';
import PropTypes from 'prop-types';

class CollapseBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    }
  }

  onExpand() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  renderCollapseBlock() {
    return <div className="collapsed">
      <p>Name: {this.props.collapsed.display_name}</p>
      <img
        src={this.props.collapsed.profile_image}
        alt={`image ${this.props.collapsed.display_name}`}/>
      <p>Reputation: {this.props.collapsed.reputation}</p>
    </div>;
  }

  renderHeadBlock() {
    const creationDate = new Date(this.props.title.creationDate * 1000).toDateString();

    return <React.Fragment>
      <p>Title: {this.props.title.title}</p>
      <p>Creation date: {creationDate}</p>
      <p>Score: {this.props.title.score}</p>
      <a href={this.props.title.link} target="_blank">Open question</a>
    </React.Fragment>;
  }

  render() {
    const answerClass = `${this.props.isAnswered ? '' : 'no-'}answered`;

    return <div className="question">
      <button
        onClick={this.onExpand.bind(this)}
        className={answerClass}>
        {this.renderHeadBlock()}
      </button>
      {this.state.expanded ? this.renderCollapseBlock() : null}
    </div>
  }
}

CollapseBlock.default = {
  isAnswered: false
};

CollapseBlock.propTypes = {
  isAnswered: PropTypes.bool,
  title: PropTypes.object.isRequired,
  collapsed: PropTypes.object.isRequired,
};

export default CollapseBlock;