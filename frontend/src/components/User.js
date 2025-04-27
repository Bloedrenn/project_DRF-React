import React from 'react';

class User extends React.Component {
    user = this.props.user;

    render() {
        return (
            <div className="user">
                <h3>{this.user.firstname} {this.user.lastname}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
            </div>
        )
    }
}

export default User;
