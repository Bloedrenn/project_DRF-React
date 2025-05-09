import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { IoCloseCircleSharp } from 'react-icons/io5';
import { FaEdit } from "react-icons/fa";

import { addCustomerAction, removeCustomerAction } from '../../../store/reducers/customersReducer';

import EditItem from "../Forms/EditItem";

import styles from './ItemCard.module.css';

const ItemCard = (props) => {
    const [editForm, setEditForm] = useState(false);

    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers)

    const addCash = (amount) => {
        dispatch({ type: "ADD_CASH", payload: amount });
    }

    const getCash = (amount) => {
        dispatch({ type: "GET_CASH", payload: amount });
    }

    const addCustomer = (customerName) => {
        const customer = { id: customers.length + 1, name: customerName } // Можно использовать Date.now() в id
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (id) => {
        dispatch(removeCustomerAction(id))
    }

    return (
        <div className={styles.item}>
            <IoCloseCircleSharp 
                onClick={() => props.onDelete(props.item.id)} 
                className={styles.deleteIcon} 
            />
            <FaEdit 
                onClick={() => setEditForm(!editForm)} 
                className={styles.editIcon} 
            />
            
            <Link to={`/items/${props.item.id}`}>
                <h3>{props.item.name}</h3>
            </Link>

            <p>{props.item.description}</p>
            <p>{props.item.price}$</p>
            <b>{props.item.isAvailable ? 'Есть в наличии' : 'Нет в наличии'}</b>

            <button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
            <button onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
            <div>{cash}</div>

            <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
            {
                customers.length > 0 ?
                <div>
                    {customers.map(customer => 
                        <div onClick={() => removeCustomer(customer.id)} key={customer.id}>{customer.name}</div>
                    )}
                </div>
                :
                <div>Клиенты отсутствуют</div>
            }

            {editForm && <EditItem onEdit={props.onEdit} item={props.item} />}
        </div>
    );
};

export default ItemCard;
