import React, { useState, useRef } from 'react';

import styles from './AddItem.module.css';

const AddItem = (props) => {
    const [formState, setFormState] = useState({
        name: null,
        description: null,
        price: null,
        isAvailable: false
    });
    
    const myForm = useRef(null);

    const handleInputChange = (field, value) => {
        setFormState(prev => ({
            ...prev,
            [field]: value === "" ? null : value
        }));
    };

    const handleSubmit = () => {
        myForm.current.reset();
        
        props.onAdd({
            name: formState.name,
            description: formState.description,
            price: formState.price,
            isAvailable: formState.isAvailable
        });

        setFormState({
            name: null,
            description: null,
            price: null,
            isAvailable: false
        });
    };

    return (
        <form ref={myForm} className={styles.form}>
            <input
                placeholder='Название'
                onChange={(e) => handleInputChange('name', e.target.value)}
            />
            
            <textarea
                placeholder='Описание'
                onChange={(e) => handleInputChange('description', e.target.value)}
            />
            
            <label htmlFor='price'>Цена</label>
            <input 
                type="number"
                id='price'
                onChange={(e) => handleInputChange('price', Number(e.target.value))}
            />
            
            <label htmlFor='isAvailable'>В наличии:</label>
            <input 
                type='checkbox' 
                id='isAvailable' 
                checked={formState.isAvailable}
                onChange={(e) => setFormState(prev => ({
                    ...prev,
                    isAvailable: e.target.checked
                }))}
            />
            
            <button 
                type='button' 
                onClick={handleSubmit}
            >
                Добавить
            </button>
        </form>
    );
};

export default AddItem;
