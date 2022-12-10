import React, { Component } from "react";
import uniqid from "uniqid";

export default class Results extends Component {
  render() {
    const { filteredList } = this.props;
    
    // Get the part numbers from the filtered list
    const partNumbers = filteredList.map((part) => {
      return part["PartNo"];
    });
    // Remove duplicate part numbers
    const uniquePartNumbers = Array.from(new Set(partNumbers));
    
    return (
      <div className="results">
        
        { filteredList.length === 0 ? <div> No results found </div> : uniquePartNumbers.map((partNo) => {
          return (
            <div className="result" key={uniqid()}>{partNo}</div>
          );
        }) }
        
      </div>
    );
  }
}