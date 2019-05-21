import React, { Component } from 'react'
import { observer } from "mobx-react"
import Box from "./Box";


class Container extends Component {

    constructor(props) {
        super();
    }

    handleAddBoxClick = () => {
        this.props.store.addBox(this.props.item);
    };

    handleAddContainerClick = () => {
        this.props.store.addContainer(this.props.item);
    };

    handleRemove = (item) => {
        this.props.store.removeItem(this.props.item.items, item);
    };

    render() {
        // hide close button if inside root container
        let closeBtn;
        if (this.props.store.root !== this.props.item) {
            closeBtn = <button className="button-close"
                               onClick={() => this.props.onRemove(this.props.item)}>x</button>
        }

        return (
            <div className="container">

                {this.props.item.items && this.props.item.items.map(item => {
                    if (item.type === 'box') {
                        return <Box onRemove={this.handleRemove}
                                    store={this.props.store}
                                    item={item}/>;
                    } else if (item.type === 'container') {
                        return <Container onRemove={this.handleRemove}
                                          store={this.props.store}
                                          item={item}/>;
                    }
                })}

                <div className="label tooltip">Add
                    <div className="tooltiptext">
                        <button className="button"
                                onClick={this.handleAddBoxClick}>Box</button>
                        <button className="button"
                                onClick={this.handleAddContainerClick}>Container</button>
                    </div>
                </div>

                {closeBtn}

            </div>
        );
    }
}

export default observer(Container);