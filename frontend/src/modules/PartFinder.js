import React, { Component } from "react";
import FilterBox from "./FilterBox.js";
import Results from "./Results.js";

export default class PartFinder extends Component {
  
  constructor() {
    super();
    this.state = {
      make: "",
      model: "",
      type: "",
      filteredList: []
    };
  }
  
  componentDidMount() {
    this.updateFilteredList();
  }
  
  // Update the filtered list of parts state
  async updateFilteredList() {
    const response = await fetch(`http://partfinder.test/api/parts?make=${this.state.make}&model=${this.state.model}&type=${this.state.type}`);
    if (response.status !== 200) {
      console.log("Error");
      return;
    }
    const data = await response.json();
    this.setState({ filteredList: data });
  }
  
  render() {
    return (
      <div className="partFinder">
        <FilterBox make={this.state.make} model={this.state.model} type={this.state.type} />
        <Results filteredList={this.state.filteredList}/>
      </div>
    );
  }
}