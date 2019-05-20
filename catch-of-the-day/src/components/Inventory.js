import React, { Component } from "react";

// Components
import AddFishForm from "./AddFishForm";

export class Inventory extends Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key];
    // Take a Copy of Fish and update with new Dats
    const updatedFish = { ...fish, [e.target.name]: e.target.value };
    this.props.updateFish(key, updatedFish);
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>
        <input
          type="text"
          value={fish.name}
          name="name"
          placeholder="Fish Name"
          onChange={e => this.handleChange(e, key)}
        />
        <input
          type="text"
          value={fish.price}
          name="price"
          placeholder="Fish Price"
          onChange={e => this.handleChange(e, key)}
        />
        <select
          type="text"
          value={fish.status}
          name="status"
          placeholder="Fish Status"
          onChange={e => this.handleChange(e, key)}
        >
          <option value="available">FRESH! </option>
          <option value="unavailable">Sold Out </option>
        </select>

        <textarea
          type="text"
          value={fish.desc}
          name="desc"
          placeholder="Fish Desc"
          onChange={e => this.handleChange(e, key)}
        />
        <input
          type="text"
          value={fish.image}
          name="image"
          placeholder="Fish Image"
        />
        <button onClick={() => this.props.removeFish(key)}>
          {" "}
          Remove Fish{" "}
        </button>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}> Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
