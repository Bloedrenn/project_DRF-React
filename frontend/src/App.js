import React, { Component } from 'react';
import axios from 'axios';

import Items from './components/Items';
import AddItem from './components/AddItem';

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

                // console.log(this.state.items);
            })
            .catch(error => console.error(error));
    }

    addItem = (item) => {
        // 
        const id = this.state.items.length + 1;

        this.setState({items: [...this.state.items, {id: id, ...item}]});
        // 
    }

    editItem = (item) => {
        // 
        let allItems = this.state.items

        allItems[item.id - 1] = item

        this.setState({items: []}, () => {
            this.setState({ items: [...allItems] })
        })
        // 
    }

    deleteItem = (id) => {
        // 
        this.setState({
            items: this.state.items.filter((item) => item.id !== id)
        })
        // 
    }

    render() {
        return (
            <div>
                <main>
                    <Items items={this.state.items} onEdit={this.editItem} onDelete={this.deleteItem} />
                </main>
                <aside>
                    <AddItem onAdd={this.addItem} />
                </aside>
            </div>
        );
    }
}

export default App;
