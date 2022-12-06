import React, { Component } from "react";

export default class FilterBox extends Component {
  render() {
    return (
      <div className="filterBox">
        
        <div>
          <h3>Filter</h3>
        </div>
        
        <div className="filterOptionBox">
          
          <div className="filterOption">
            <label htmlFor="makeFilter">Make:</label>
            <select id="makeFilter">
              <option value="all">All</option>
              {/* These will be dynamically generated */}
              <option value="name">AIRMAN</option>
              <option value="price">Caterpillar</option>
            </select>
          </div>
          
          <div className="filterOption">
            <label htmlFor="modelFilter">Model:</label>
            <select id="modelFilter">
              <option value="all">All</option>
              <option value="name">AIRMAN</option>
              <option value="price">Caterpillar</option>
            </select>
          </div>
          
          <div className="filterOption">
            <label htmlFor="typeFilter">Type:</label>
            <select id="typeFilter">
              <option value="all">All</option>
              <option value="name">AIRMAN</option>
              <option value="price">Caterpillar</option>
            </select>
          </div>
          
        </div>
        
      </div>
    );
  }
}