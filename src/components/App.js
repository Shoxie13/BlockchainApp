import React, { Component } from "react";

import NavBar from "./Mui/NavBar/NavBar";

import Web3 from "web3";
//import MemoryToken from "../abis/MemoryToken.json";
import Earth from "./Planets/Earth/Earth";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      accounts: "",
    };
  }

  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();

    this.setState({ accounts });
    // Load smart contract
    // const networkId = await web3.eth.net.getId();
    // const networkData = MemoryToken.networks[networkId];

    // if (networkData) {
    //   const abi = MemoryToken.abi;
    //   const address = networkData.address;
    //   const token = new web3.eth.Contract(abi, address);
    //   this.setState({ token });
    //   const totalSupply = await token.methods.totalSupply().call();
    //   this.setState({ totalSupply });
    //   // Load Tokens
    //   let balanceOf = await token.methods.balanceOf(accounts[0]).call();
    //   for (let i = 0; i < balanceOf; i++) {
    //     let id = await token.methods.tokenOfOwnerByIndex(accounts[0], i).call();
    //     let tokenURI = await token.methods.tokenURI(id).call();
    //     this.setState({
    //       tokenURIs: [...this.state.tokenURIs, tokenURI],
    //     });
    //   }
    // } else {
    //   alert("Smart contract not deployed to detected network.");
    // }
  }

  render() {
    return (
      <>
        <NavBar acc={this.state.accounts} />
        <Earth />
      </>
    );
  }
}
