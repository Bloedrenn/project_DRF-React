import React from 'react';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { FaEdit } from "react-icons/fa";

class User extends React.Component {
    user = this.props.user;

    render() {
        return (
            <div className="user">
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className='delete-icon' />
                <FaEdit className='edit-icon' />
                <h3>{this.user.firstname} {this.user.lastname}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
            </div>
        )
    }
}

export default User;
