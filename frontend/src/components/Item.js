import React from 'react';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { FaEdit } from "react-icons/fa";

import EditItem from "./EditItem";

class Item extends React.Component {
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
                <h3>{this.props.item.name}</h3>
                <p>{this.props.item.description}</p>
                <p>{this.props.item.price}$</p>
                <b>{this.props.item.is_available ? 'Есть в наличии' : 'Нет в наличии'}</b>

                {this.state.editForm && <EditItem onEdit={this.props.onEdit} item={this.props.item} />}
            </div>
        )
    }
}

export default Item;
