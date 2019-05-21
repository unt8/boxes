import React, { Component } from 'react'
import { observer } from "mobx-react"
import ColorPicker from "./ColorPicker";

class Box extends Component {
    constructor(props) {
        super();
    }

    handleColorChange = (color, item) => {
        this.props.store.setColor(color, item);
    };

    handleClick = (box) => {
        this.props.store.setRandomColor(box);
    };

    render() {
        let color = this.props.item.color || 'orange';

        return (
            <div className="tooltip">
                <div className="box"
                     style={{ backgroundColor: color }}
                     onClick={() => this.handleClick(this.props.item)}>

                    <button className="button-close"
                            onClick={() => this.props.onRemove(this.props.item)}>x</button>
                </div>

                <div className="tooltiptext">
                    <ColorPicker cinjectolor={this.props.item.color}
                                 onChange={(color) => this.handleColorChange(color, this.props.item)}/>
                </div>
            </div>
        );
    }
}

export default observer(Box);