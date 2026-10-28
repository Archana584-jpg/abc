import React, { Component } from "react";
import { connect } from "react-redux";
import { HomeComponent } from "../components";

class Home extends Component {
  render() {
    return <HomeComponent />;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
