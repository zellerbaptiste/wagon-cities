import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

import City from './city';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities">
        {this.props.cities.map((city) => {
          return <City city={city} key={city.name} />;
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
