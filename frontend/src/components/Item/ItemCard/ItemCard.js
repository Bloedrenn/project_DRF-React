import React from 'react';
import { Link } from 'react-router-dom';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { FaEdit } from "react-icons/fa";

import EditItem from "../Forms/EditItem";

class ItemCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            editForm: false
        }
    }

    render() {
        return (
            <div className="item">
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.props.item.id)} className='delete-icon' />
                <FaEdit onClick={() => this.setState({editForm: !this.state.editForm}) } className='edit-icon' />
                
                <Link to={`/items/${this.props.item.id}`}>
                    <h3>{this.props.item.name}</h3>
                </Link>

                <p>{this.props.item.description}</p>
                <p>{this.props.item.price}$</p>
                <b>{this.props.item.isAvailable ? 'Есть в наличии' : 'Нет в наличии'}</b>

                {this.state.editForm && <EditItem onEdit={this.props.onEdit} item={this.props.item} />}
            </div>
        )
    }
}

export default ItemCard;
