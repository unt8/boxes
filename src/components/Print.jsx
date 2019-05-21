import React, { Component } from 'react'
import { observer } from "mobx-react"

class Print extends Component {

    constructor(props) {
        super();

        this.state = {
            text: null
        };
    }

    handlePrintClick = (root) => {
        this.setState({
            text: JSON.stringify(root)
        })
    };

    render() {
        return (
            <div className="print">
                <button className="button"
                        onClick={() => this.handlePrintClick(this.props.store.root)}>Print</button>

                <div>{this.state.text}</div>
            </div>
        );
    }
}

export default observer(Print);