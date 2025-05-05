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
                const items = response.data.map(item => {
                    // Деструктурируем item, извлекаем is_available и сохраняем остальные поля
                    const { is_available, ...rest } = item;
                    // Возвращаем новый объект с camelCase-полем isAvailable
                    return {
                        ...rest,
                        isAvailable: is_available
                    };
                });
            
                this.setState({ items });
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
        this.setState(prevState => ({
            items: prevState.items.map(prevItem => prevItem.id === item.id ? item : prevItem)
        }));
        // 
    };

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
