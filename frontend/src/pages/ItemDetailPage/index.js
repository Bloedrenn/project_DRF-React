import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { fetchItem } from '../../api/itemsApi';

import styles from './ItemDetailPage.module.css';

const ItemDetailPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchItem(id)
            .then(response => {
                const { is_available, ...rest } = response.data;
                setItem({
                    ...rest,
                    isAvailable: is_available
                });
                setLoading(false);
            })
            .catch(error => {
                console.error('Ошибка загрузки товара:', error);
                setError('Ошибка! Не удалось загрузить товар');
                setLoading(false);
            });
    });

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={styles.detail}>
            <Link to="/">← Назад к списку</Link>
            <h1 className={styles.title}>{item.name}</h1>
            <p>{item.description}</p>
            <div className={styles.price}>Цена: {item.price}$</div>
            <div className={styles.availability}>
                {item.isAvailable ? 'Есть в наличии' : 'Нет в наличии'}
            </div>
        </div>
    );
}

export default ItemDetailPage;