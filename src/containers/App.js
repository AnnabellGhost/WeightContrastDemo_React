import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../styles/skeleton.css';
import TodayWeight from '../components/TodayWeight';
import ChartView from '../components/ChartView';

// import {addTodayWeight} from '../actions';
import * as Actions from '../actions';


class App extends Component {
  render() {
    return (
      <div className="container">
          <h4>比照上月同日体重才科学。</h4>
          <TodayWeight {...this.props.weights} {...this.props.addTodayWeight}/>
          <ChartView />
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    weights:state.weights
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addTodayWeight: bindActionCreators(Actions, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
