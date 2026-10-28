import React, { Component } from "react";
import { connect } from "react-redux";
import { SettingsComponent } from "../components";

class Settings extends Component {

    render() {
        return (
            <SettingsComponent/>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
