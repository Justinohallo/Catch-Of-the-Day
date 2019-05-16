import React, { Component } from "react";

// Components
import AddFishForm from "./AddFishForm";

export class Inventory extends Component {
  render() {
    return (
      <div>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}> Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
