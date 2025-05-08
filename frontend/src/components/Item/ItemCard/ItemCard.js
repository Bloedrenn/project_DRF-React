import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { FaEdit } from "react-icons/fa";

import EditItem from "../Forms/EditItem";

import styles from './ItemCard.module.css';

const ItemCard = (props) => {
    const [editForm, setEditForm] = useState(false);

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

            {editForm && <EditItem onEdit={props.onEdit} item={props.item} />}
        </div>
    );
};

export default ItemCard;
