import React, { Component } from 'react'
import { observer } from "mobx-react"
import _ from 'lodash';

class TextBox extends Component {

    constructor(props) {
        super();

        this.state = {
            text: '"{"type":"container", "items":[{"type":"box"}, {"type":"container", "items":[{"type":"box", "color":"green"}, {"type":"box", "color":"red"}]}]}"'
        };
    }

    handleBuildClick = (text) => {
        let data;

        try {
            data = JSON.parse(_.trim(text, '"'));
        } catch (e) {
            alert('Input incorrect');
        }

        if (data) {
            this.props.store.setRoot(data);
        }
    };

    handleChange = (event) => {
        this.setState({text: event.target.value});
    };

    render() {
        return (
            <div className="textbox">
                <textarea cols="100"
                          rows="5"
                          value={this.state.text}
                          onChange={this.handleChange}>
                </textarea>

                <button className="button"
                        onClick={() => this.handleBuildClick(this.state.text)}>Build</button>

            </div>
        );
    }
}

export default observer(TextBox);