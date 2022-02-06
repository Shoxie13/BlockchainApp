import React, { Component } from "react";

import NavBar from "./Mui/NavBar/NavBar";
import Routes from "../Utils/Routing";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      accounts: "",
    };
  }

  // async componentWillMount() {
  //   await this.getAccount();
  // }

  // async getAccount() {
  //   if (window.ethereum) {
  //     //check if Metamask is installed
  //     try {
  //       const address = await ethereum.request({
  //         method: "eth_requestAccounts",
  //       }); //connect Metamask
  //       const obj = {
  //         connectedStatus: true,
  //         status: "",
  //         address: address,
  //       };
  //       return obj;
  //     } catch (error) {
  //       return {
  //         connectedStatus: false,
  //         status: "🦊 Connect to Metamask using the button on the top right.",
  //       };
  //     }
  //   } else {
  //     return {
  //       connectedStatus: false,
  //       status:
  //         "🦊 You must install Metamask into your browser: https://metamask.io/download.html",
  //     };
  //   }
  // }

  render() {
    return (
      <>
        <NavBar acc={this.state.accounts} />
        <Routes />
      </>
    );
  }
}
