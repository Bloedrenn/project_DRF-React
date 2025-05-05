import React, { Component } from 'react';
import axios from 'axios';

import Users from './components/Users';
import AddUser from './components/AddUser';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
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

        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        axios.get('/api/items/')
            .then(response => {
                this.setState({ items: response.data });
            })
            .catch(error => console.error(error));
    }

    addUser(user) {
        const id = this.state.users.length + 1;

        this.setState({users: [...this.state.users, {id: id, ...user}]});
    }

    editUser(user) {
        let allUsers = this.state.users

        allUsers[user.id - 1] = user

        this.setState({users: []}, () => {
            this.setState({ users: [...allUsers] })
        })
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((user) => user.id !== id)
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map(item => (
                        <li key={item.id}>
                            <strong>{item.name}</strong>: {item.description}
                        </li>
                    ))}
                </ul>

                <main>
                    <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
                </main>
                <aside>
                    <AddUser onAdd={this.addUser} />
                </aside>
            </div>
        );
    }
}

export default App;
