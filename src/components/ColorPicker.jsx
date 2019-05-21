import React, { Component } from 'react'
import { observer } from "mobx-react"

class ColorPicker extends Component {
    constructor(props) {
        super();

        this.colors = [
            '#FF6900',
            '#FCB900',
            '#7BDCB5',
            '#00D084',
            '#8ED1FC',
            '#0693E3',
            '#ABB8C3',
            '#EB144C',
            '#F78DA7',
            '#9900EF',
            '#FFA500',
        ];
    }

    // stringToColour("greenish");
    // -> #9bc63b
    stringToColour = function(str) {
        if (str.startsWith("#")) {
            return str.toUpperCase()
        }

        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        let colour = '#';
        for (let i = 0; i < 3; i++) {
            let value = (hash >> (i * 8)) & 0xFF;
            colour += ('00' + value.toString(16)).substr(-2);
        }
        colour = colour.toUpperCase();
        return colour;
    };

    render() {
        let hexPropColor;
        if (this.props.color) {
            hexPropColor = this.stringToColour(this.props.color);
        } else {
            hexPropColor = '#FFA500';
        }

        return (
            <div className="color-picker">

                {this.colors.map(color => {
                    const style = {
                        background: color,
                    };

                    if (hexPropColor === color) {
                        style.boxShadow = `${color} 0 0 4px`;
                    }

                    return (<div className="color-picker-color"
                                 style={style}
                                 onClick={() => this.props.onChange(color)}>
                    </div>)
                })}

                <input type="text"
                       value={hexPropColor}
                       onChange={(e) => this.props.onChange(e.target.value)}/>
            </div>
        );
    }
}

ColorPicker.defaultProps = {
    color: '#FFA500',
};



export default observer(ColorPicker);