import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { fetchItems, createItem, updateItem, deleteItem } from './api/itemsApi';

import HomePage from './pages/HomePage';
import ItemDetailPage from './pages/ItemDetailPage';

function App() {
    const [items, setItems] = useState([]);

    // Загрузка товаров при монтировании компонента
    useEffect(() => {
        fetchItems()
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

                setItems(items);
            })
            .catch(error => {
                console.error('Ошибка загрузки товаров:', error);
            });
    }, []); // Пустой массив зависимостей — эффект выполняется один раз при монтировании

    const addItem = (item) => {
        // Конвертируем camelCase -> snake_case для бэкенда
        const backendItem = {
            name: item.name,
            description: item.description,
            price: item.price,
            is_available: item.isAvailable
        };

        createItem(backendItem)
            .then(response => {
                // Получаем созданный объект с бэкенда (включая реальный ID)
                // Удаляем is_available из ответа и добавляем isAvailable
                const { is_available, ...restData } = response.data;
                const newItem = {
                    ...restData,
                    isAvailable: is_available
                };

                setItems(prevItems => [...prevItems, newItem]);
            })
            .catch(error => {
                console.error('Ошибка добавления:', error);
                alert('Не удалось добавить товар');
            });
    };

    const editItem = (item) => {
        // Конвертируем camelCase -> snake_case для бэкенда
        const backendItem = {
            name: item.name,
            description: item.description,
            price: item.price,
            is_available: item.isAvailable
        };

        updateItem(item.id, backendItem)
            .then(response => {
                // Обновляем состояние только после успешного ответа от сервера
                const { is_available, ...restData } = response.data;
                setItems(prevItems =>
                    prevItems.map(prevItem =>
                        prevItem.id === item.id ? { ...restData, isAvailable: is_available } : prevItem
                    )
                );
            })
            .catch(error => {
                console.error('Ошибка обновления:', error);
                alert('Не удалось обновить товар');
            });
    };

    const removeItem = (id) => {
        if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
            // Отправляем DELETE-запрос на бэкенд
            deleteItem(id)
                .then(() => {
                    // Успешное удаление на бэкенде -> обновляем фронт
                    setItems(prevItems => prevItems.filter(item => item.id !== id));
                })
                .catch(error => {
                    console.error('Ошибка удаления:', error);
                });
        }
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <HomePage
                        items={items}
                        onAdd={addItem}
                        onEdit={editItem}
                        onDelete={removeItem}
                    />
                } />
                <Route path="/items/:id" element={<ItemDetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;