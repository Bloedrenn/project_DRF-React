import React from 'react';

class Users extends React.Component {
    users = [
        {
            id: 1,
            firstname: 'Bob',
            lastname: 'Marley',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum lobortis ullamcorper. Praesent convallis quam in metus feugiat sodales. Suspendisse sed consectetur sapien. Cras non quam tempor, pretium ante ac.',
            age: 40,
            isHappy: true
        },
        {
            id: 2,
            firstname: 'John',
            lastname: 'Doe',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum lobortis ullamcorper. Praesent convallis quam in metus feugiat sodales. Suspendisse sed consectetur sapien. Cras non quam tempor, pretium ante ac.',
            age: 22,
            isHappy: false
        }
    ]

    render() {
        if (this.users.length > 0) {
            return (
                <div>
                    {this.users.map((user) => (
                        <div className="user" key={user.id}>
                            <h3>{user.firstname} {user.lastname}</h3>
                            <p>{user.bio}</p>
                            <b>{user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
                        </div>
                    ))}
                </div>
            )
        }
        
        else {
            return (
                <div className="user">
                    <h3>Пользователей нет</h3>
                </div>
            )
        }
    }
}

export default Users;
