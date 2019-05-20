import React, { Component } from "react";
import base from "../base";

// Components
import AddFishForm from "./AddFishForm";

export class Inventory extends Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.state = {
      uid: null,
      owner: null
    };
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
          onChange={e => this.handleChange(e, key)}
        />
        <button onClick={() => this.props.removeFish(key)}>
          {" "}
          Remove Fish{" "}
        </button>
      </div>
    );
  }

  authenticate(provider) {
    console.log(`${provider}`);
    base.AuthWithOAuthPopup(provider, this.authHandler);
  }

  authHandler(err, auth) {}

  renderLogin() {
    return (
      <nav className="login">
        <h2> Inventory</h2>
        <p> Sign Into manage your store's Inventory</p>
        <button
          className="facebook"
          onClick={() => this.authenticate(`facebook`)}
        >
          Log In With Facebook{" "}
        </button>
      </nav>
    );
  }

  render() {
    const logout = <button> Log Out! </button>;
    // Check if they are not logged in
    if (!this.state.uid) {
      return <div> {this.renderLogin()}</div>;
    }

    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          {" "}
          <p>Sorry You arent the Owner of this store </p>
          {logout}
        </div>
      );
    }
    return (
      <div>
        <h2>Inventory</h2>
        {logout}
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}> Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
