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
      filteredList: [],
      makeOptions: [],
      modelOptions: [],
      typeOptions: []
    };
    this.updateMake = this.updateMake.bind(this);
    this.updateModel = this.updateModel.bind(this);
    this.updateType = this.updateType.bind(this);
  }
  
  componentDidMount() {
    this.initializeOptions();
    this.updateFilteredList();
  }
  
  async initializeOptions() {
    const response = await fetch(`http://partfinder.test/api/parts`);
    if (response.status !== 200) {
      console.log("Error");
      return;
    }
    const data = await response.json();
    
    // Get the unique makes
    let tempMakeOptions = [];
    data.forEach((part) => {
      tempMakeOptions.push(part["Make"]);
    });
    // Remove duplicates
    tempMakeOptions = Array.from(new Set(tempMakeOptions));
    
    // Get the unique models
    let tempModelOptions = [];
    data.forEach((part) => {
      tempModelOptions.push(part["Model"]);
    });
    // Remove duplicates
    tempModelOptions = Array.from(new Set(tempModelOptions));
    
    // Get the unique types
    let tempTypeOptions = [];
    data.forEach((part) => {
      tempTypeOptions.push(part["Type"]);
    });
    // Remove duplicates
    tempTypeOptions = Array.from(new Set(tempTypeOptions));
    
    this.setState({
      makeOptions: tempMakeOptions,
      modelOptions: tempModelOptions,
      typeOptions: tempTypeOptions
    });
  }
  
  async setModelOptions() {
    const response = await fetch(`http://partfinder.test/api/parts?make=${encodeURIComponent(this.state.make)}`);
    if (response.status !== 200) {
      console.log("Error");
      return;
    }
    const data = await response.json();
    
    // Get the unique models
    let tempModelOptions = [];
    data.forEach((part) => {
      tempModelOptions.push(part["Model"]);
    });
    // Remove duplicates
    tempModelOptions = Array.from(new Set(tempModelOptions));
    this.setState({ modelOptions: tempModelOptions });
  }
  
  async setTypeOptions() {
    const response = await fetch(`http://partfinder.test/api/parts?make=${encodeURIComponent(this.state.make)}&model=${encodeURIComponent(this.state.model)}`);
    if (response.status !== 200) {
      console.log("Error");
      return;
    }
    const data = await response.json();
    
    // Get the unique types
    let tempTypeOptions = [];
    data.forEach((part) => {
      tempTypeOptions.push(part["Type"]);
    });
    // Remove duplicates
    tempTypeOptions = Array.from(new Set(tempTypeOptions));
    this.setState({ typeOptions: tempTypeOptions });
  }
  
  async updateFilteredList() {
    const response = await fetch(`http://partfinder.test/api/parts?make=${encodeURIComponent(this.state.make)}&model=${encodeURIComponent(this.state.model)}&type=${encodeURIComponent(this.state.type)}`);
    if (response.status !== 200) {
      console.log("Error");
      return;
    }
    const data = await response.json();
    this.setState({ filteredList: data });
  }
  
  updateMake(event) {
    // Reduce the number of records to rerender by clearing the list when awaiting
    this.setState({filteredList: []});
    
    let value = event.target.value;
    if (value === "all") {
      value = "";
    }
    
    this.setState({ make: value, model: "", type: "" }, () => {
      this.updateFilteredList();
      this.setModelOptions();
      this.setTypeOptions();
    });
  }
  
  updateModel(event) {
    this.setState({filteredList: []});
    
    let value = event.target.value;
    if (value === "all") {
      value = "";
    }
    this.setState({ model: value, type: ""}, () => {
      this.updateFilteredList();
      this.setTypeOptions();
    });
  } 

  updateType(event) {
    this.setState({filteredList: []});
    
    let value = event.target.value;
    if (value === "all") {
      value = "";
    }
    this.setState({ type: value }, () => {
      this.updateFilteredList();
    });
  }
  
  render() {
    return (
      <div className="partFinder">
        <FilterBox 
        make={this.state.make} 
        model={this.state.model} 
        type={this.state.type} 
        filteredList={this.state.filteredList} 
        makeOptions={this.state.makeOptions} 
        modelOptions={this.state.modelOptions} 
        typeOptions={this.state.typeOptions} 
        updateMake={this.updateMake} 
        updateModel={this.updateModel} 
        updateType={this.updateType} />
        
        <Results filteredList={this.state.filteredList} />
      </div>
    );
  }
}