import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser';

import Image from './components/Image';
import teslaImg from './img/Tesla.jpg'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            tempText: 5,
            userData: "",
            users: [
                {
                    id: 1,
                    firstname: 'Bob',
                    lastname: 'Marley',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    age: 40,
                    isHappy: true
                },
                {
                    id: 2,
                    firstname: 'John',
                    lastname: 'Doe',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum lobortis ullamcorper.',
                    age: 22,
                    isHappy: false
                }
            ]
        };

        this.h1Click = this.h1Click.bind(this);
        this.addUser = this.addUser.bind(this);
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

    addUser(user) {
        const id = this.state.users.length + 1;

        this.setState({users: [...this.state.users, {id, ...user}]});
    }

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

                <main>
                    <Users users={this.state.users} />
                </main>
                <aside>
                    <AddUser onAdd={this.addUser} />
                </aside>
            </div>
        );
    }
}

export default App;
