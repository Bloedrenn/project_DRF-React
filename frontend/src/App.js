import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    tempText = "Hello World!"

    componentDidMount() {
        axios.get('/api/items/')
            .then(response => {
                this.setState({ items: response.data });
            })
            .catch(error => console.error(error));
    }

    h1Click() { console.log("Нажали на h1") }
    h1MouseEnter() { console.log("Навели курсор на h1") }

    render() {
        return (
            <div>
                <Header title="Шапка сайта!!" />
                <h1 onClick={this.h1Click} onMouseEnter={this.h1MouseEnter}>Список Items {this.tempText}</h1>
                <ul>
                    {this.state.items.map(item => (
                        <li key={item.id}>
                            <strong>{item.name}</strong>: {item.description}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
