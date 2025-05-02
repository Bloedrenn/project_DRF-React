import React from 'react';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { FaEdit } from "react-icons/fa";

import AddUser from "./AddUser";

class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            editForm: false
        }
    }

    user = this.props.user;

    render() {
        return (
            <div className="user">
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className='delete-icon' />
                <FaEdit onClick={() => this.setState({editForm: !this.state.editForm}) } className='edit-icon' />
                <h3>{this.user.firstname} {this.user.lastname}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>

                {this.state.editForm && <AddUser />}
            </div>
        )
    }
}

export default User;
