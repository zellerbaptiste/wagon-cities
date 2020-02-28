import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }

  render() {
    let classes = 'city';
    if (this.props.city === this.props.activeCity) {
      classes += ' selected';
    }
    return (
      <div className={classes} onClick={this.handleClick} role="button">
        <h2>{this.props.city.name}</h2>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
