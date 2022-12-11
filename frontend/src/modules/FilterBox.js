import React, { Component } from "react";
import uniqid from "uniqid";

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
            <select id="makeFilter" onChange={this.props.updateMake} value={this.props.make}>
              <option value="all">All</option>
              {this.props.makeOptions.map((makeOption) => {
                return <option key={uniqid()} value={makeOption}>{makeOption}</option>;
              })}
            </select>
          </div>
          
          <div className="filterOption">
            <label htmlFor="modelFilter">Model:</label>
            <select id="modelFilter" onChange={this.props.updateModel} value={this.props.model}>
              <option value="all">All</option>
              {this.props.modelOptions.map((modelOption) => {
                return <option key={uniqid()} value={modelOption}>{modelOption}</option>;
              })}
            </select>
          </div>
          
          <div className="filterOption">
            <label htmlFor="typeFilter">Type:</label>
            <select id="typeFilter" onChange={this.props.updateType} value={this.props.type}>
              <option value="all">All</option>
              {this.props.typeOptions.map((typeOption) => {
                return <option key={uniqid()} value={typeOption}>{typeOption}</option>;
              })}
            </select>
          </div>
          
        </div>
        
      </div>
    );
  }
}