import React from 'react';

class AddUser extends React.Component {
    render() {
        return (
            <form>
                <input placeholder='Имя' />
                <input placeholder='Фамилия' />
                <textarea placeholder='Биография'></textarea>
                <input placeholder='Возраст' />

                <label htmlFor='isHappy'>Счатлив?</label>
                <input type='checkbox' id='isHappy' />

                <button type='button'>Добавить</button>
            </form>
        )
    }
}

export default AddUser;
