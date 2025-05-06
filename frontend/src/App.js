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
        // Конвертируем camelCase -> snake_case для бэкенда
        const backendItem = {
            name: item.name,
            description: item.description,
            price: item.price,
            is_available: item.isAvailable
        };

        axios.post('/api/items/', backendItem)
            .then(response => {
                // Получаем созданный объект с бэкенда (включая реальный ID)
                // Удаляем is_available из ответа и добавляем isAvailable
                const { is_available, ...restData } = response.data;
                const newItem = {
                    ...restData,
                    isAvailable: is_available
                };

                this.setState(prevState => ({
                    items: [...prevState.items, newItem]
                }));
            })
            .catch(error => {
                console.error('Ошибка добавления:', error);
                alert('Не удалось добавить товар');
            });
    };

    editItem = (item) => {
        // Конвертируем camelCase -> snake_case для бэкенда
        const backendItem = {
            name: item.name,
            description: item.description,
            price: item.price,
            is_available: item.isAvailable
        };

        axios.put(`/api/items/${item.id}/`, backendItem)
            .then(response => {
                // Обновляем состояние только после успешного ответа от сервера
                const { is_available, ...restData } = response.data;
                this.setState(prevState => ({
                    items: prevState.items.map(prevItem => 
                        prevItem.id === item.id 
                            ? { ...restData, isAvailable: is_available } 
                            : prevItem
                    )
                }));
            })
            .catch(error => {
                console.error('Ошибка обновления:', error);
                alert('Не удалось обновить товар');
                // Можно добавить откат состояния
            });
    };

    deleteItem = (id) => {
        if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
            // Отправляем DELETE-запрос на бэкенд
            axios.delete(`/api/items/${id}/`)
                .then(() => {
                    // Успешное удаление на бэкенде -> обновляем фронт
                    this.setState({
                        items: this.state.items.filter((item) => item.id !== id)
                    });
                })
                .catch(error => console.error('Ошибка удаления:', error));
        }
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
