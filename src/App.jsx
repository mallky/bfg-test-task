import './App.less';
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-date-picker';
import { connect } from 'react-redux';
import { addData, addFromData } from './store/actions/actions';
import CollapseBlock from './components/collapse-block/CollapseBlock.jsx';
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
    console.log(this.props.data);
    return <ol>
      {this.props.data.map((item, i) => {
        const answered = item.is_answered ? 'answered' : 'no-answered';
        const title = {
          title: item.title,
          creationDate: item.creation_date,
          link: item.link,
          score: item.score
        };
        const collapsedText = item.owner;

        return i < 5 ?
          <li
            key={i}
            className='list-item'>
            <CollapseBlock
              isAnswered={item.is_answered}
              collapsed={collapsedText}
              title={title}/>
          </li> : null;
      }).filter((item) => item)}
    </ol>
  }

  onChange(date) {
    this.setState({ date });
    this.props.addFromData(date.valueOf());
  }

  onFind() {
    utils.getData(this.props.fromDate, this.props.addData);
  }

  isDateChange() {
    return this.state.date; // && this.state.date.valueOf() !== this.props.fromDate;
  }

  render () {
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

App.propTypes = {
  data: PropTypes.array
};
