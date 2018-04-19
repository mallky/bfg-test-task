import './App.less';
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-date-picker';
import { connect } from 'react-redux';
import { addData, addFromData } from './store/actions/actions';
import utils from './utils/utils';


const mapStateToProps = (state) => ({
  data: state.data.data,
  fromDate: state.data.fromDate,
});
const mapDispatchToProps = (dispatch) => ({
  addFromData: (date) => dispatch(addFromData(date)),
  addData: (data) => dispatch(addData(data))
});

@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(2018, 0, 1)
    }
  }

  componentWillMount () {
    utils.getData(this.props.fromDate, this.props.addData);
  }

  renderList() {
    return <ol>
      {this.props.data.map((item, i) => {
        const answered = item.is_answered ? 'answered' : 'no-answered';

        return i < 5 ? <li key={i} className={`list-item ${answered}`}><p>{item.title}</p><p>Score: {item.score}</p></li> : null;
      }).filter((item) => item)}
    </ol>
  }

  onChange(date) {
    this.setState({ date });
    console.log(date.valueOf());
    this.props.addFromData(date.valueOf());
  }

  onFind() {
    utils.getData(this.props.fromDate, this.props.addData);
  }

  isDateChange() {
    return this.state.date && this.state.date.valueOf() !== this.props.fromDate;
  }

  render () {
    console.log(this.state.date);
    return <div>
      <div className="datepicker-box">
        <DatePicker
          onChange={this.onChange.bind(this)}
          value={this.state.date}/>
        {this.isDateChange()
          ? <button onClick={this.onFind.bind(this)}>Find</button> : null}
      </div>
      Hello TEST!
      {this.renderList()}
    </div>;
  }
}

export default App;

App.PropTypes = {
  data: PropTypes.array.isRequired
};
