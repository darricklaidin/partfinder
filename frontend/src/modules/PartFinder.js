import React, { Component } from "react";
import FilterBox from "./FilterBox.js";
import Results from "./Results.js";

export default class PartFinder extends Component {
  render() {
    return (
      <div className="partFinder">
        <FilterBox />
        <Results />
      </div>
    );
  }
}