import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';

import Image from './components/Image';
import teslaImg from './img/Tesla.jpg'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            tempText: 5,
            userData: ""
        };

        this.h1Click = this.h1Click.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.tempText !== prevState.tempText) {
            console.log("Состояние - tempText изменилось");
        }
    }

    componentDidMount() {
        axios.get('/api/items/')
            .then(response => {
                this.setState({ items: response.data });
            })
            .catch(error => console.error(error));
    }

    h1Click() {
        console.log("Нажали на h1")
        this.setState({
            tempText: 10
        })
    }
    h1MouseEnter() { console.log("Навели курсор на h1") }

    render() {
        return (
            <div>
                <Header title="Шапка сайта!!" />
                <h1 onClick={this.h1Click} onMouseEnter={this.h1MouseEnter}>Список Items {this.state.tempText}</h1>
                <h2>{this.state.userData}</h2>
                <input onChange={event => this.setState({ userData: event.target.value })} />
                <ul>
                    {this.state.items.map(item => (
                        <li key={item.id}>
                            <strong>{item.name}</strong>: {item.description}
                        </li>
                    ))}
                </ul>

                <Image imageUrl={teslaImg} />
                <img src={teslaImg} />
            </div>
        );
    }
}

export default App;
