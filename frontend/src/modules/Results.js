import React, { Component } from "react";
import uniqid from "uniqid";

export default class Results extends Component {
  render() {
    const { filteredList } = this.props;
    
    return (
      <div className="results">
        
        { filteredList.length === 0 ? <div> No results found </div> : filteredList.map((part, index) => {
          return (
            <div className="result" key={uniqid()}>{part["PartNo"]}</div>
          );
        }) }
        
      </div>
    );
  }
}