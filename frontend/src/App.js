import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Header';

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('/api/items/')
        .then(response => setItems(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <Header />
            <h1>Список Items</h1>
            <ul>
                {items.map(item => (
                <li key={item.id}>
                    <strong>{item.name}</strong>: {item.description}
                </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
