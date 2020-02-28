import React, { Component } from 'react';

class CityList extends Component {
  render() {
    return (
      <div className="city">
        <h2>{this.props.city.name}</h2>
      </div>
    )
  }
}

export default CityList;