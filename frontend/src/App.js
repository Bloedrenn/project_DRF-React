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

    componentDidMount() {
        axios.get('/api/items/')
            .then(response => {
                this.setState({ items: response.data });
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <Header />
                <h1>Список Items</h1>
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
