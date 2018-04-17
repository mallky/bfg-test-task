import './App.less';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addData } from './store/actions/actions';
import utils from './utils/utils';


const mapStateToProps = (state) => ({
  data: state.data.data,
  fromDate: state.data.fromDate,
});

@connect(mapStateToProps)
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () {
    fetch(utils.getURL(this.props.fromDate))
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const neededData = data.items.filter((item) => {
          const test = /react-redux/i.test(item.title);
          return item.is_answered && test;
        });
        this.props.dispatch(addData(neededData));
      });
  }

  renderList() {
    return <ol>
      {this.props.data.map((item, i) => {
        return i < 5 ? <li key={i} className="list-item"><p>{item.title}</p><p>Score: {item.score}</p></li> : null;
      }).filter((item) => item)}
    </ol>
  }

  render () {
    return <div>
      Hello TEST!
      {this.renderList()}
    </div>;
  }
}

export default App;

App.PropTypes = {
  data: PropTypes.array.isRequired
};
