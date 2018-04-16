import './App.less';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () {
    fetch('https://api.stackexchange.com/2.2/questions?fromdate=1514764800&todate=1523836800&order=desc&sort=votes&tagged=react-redux&site=stackoverflow')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.items.filter((item) => {
          // const test = /react-redux/.test(item.title);
          return item.is_answered ? item : null;
        }));
      });
  }

  render () {
    return <div>
      Hello TEST!
    </div>;
  }
}

export default App;