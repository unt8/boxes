import React from 'react';
import './App.css';
import Container from "./components/Container";
import TextBox from "./components/TextBox";
import { observer } from "mobx-react"

import Store from "./models/Store";
import Print from "./components/Print";

const store = new Store();

function App() {
    return (
        <div className="App">
            <Container store={store} item={store.root}/>

            <TextBox store={store}/>

            <Print store={store}/>
        </div>
    );
}

export default observer(App);
