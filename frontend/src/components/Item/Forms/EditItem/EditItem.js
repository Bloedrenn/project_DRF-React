import React, { useState, useEffect } from 'react';

import styles from './EditItem.module.css';

const EditItem = ({ item, onEdit }) => {
    const [formData, setFormData] = useState({ ...item });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: field === 'price' ? Number(value) : value
        }));
    };

    const handleSubmit = () => {
        onEdit({
            id: item.id,
            ...formData
        });
    };

    return (
        <form className={styles.form}>
            <input
                placeholder='Название'
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
            />
            
            <textarea
                placeholder='Описание'
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
            />
            
            <label htmlFor='price'>Цена</label>
            <input
                type="number"
                id='price'
                value={formData.price}
                onChange={(e) => handleInputChange('price', e.target.value)}
            />
            
            <label htmlFor='isAvailable'>В наличии:</label>
            <input
                type='checkbox'
                id='isAvailable'
                checked={formData.isAvailable}
                onChange={(e) => setFormData(prev => ({
                    ...prev,
                    isAvailable: e.target.checked
                }))}
            />
            
            <button
                type='button'
                onClick={handleSubmit}
            >
                Сохранить
            </button>
        </form>
    );
};

export default EditItem;