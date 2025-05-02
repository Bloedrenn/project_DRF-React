import React from 'react';

class EditUser extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: this.props.user.firstname,
            lastname: this.props.user.lastname,
            bio: this.props.user.bio,
            age: this.props.user.age,
            isHappy: this.props.user.isHappy
        }
    }

    render() {
        return (
            <form>
                <input placeholder='Имя' value={this.state.firstname} onChange={(e) => this.setState({ firstname: e.target.value })} />
                <input placeholder='Фамилия' value={this.state.lastname} onChange={(e) => this.setState({ lastname: e.target.value })} />
                <textarea placeholder='Биография' value={this.state.bio} onChange={(e) => this.setState({ bio: e.target.value })}></textarea>
                <input placeholder='Возраст' value={this.state.age} onChange={(e) => this.setState({ age: e.target.value })} />

                <label htmlFor='isHappy'>Счастлив?</label>
                <input type='checkbox' id='isHappy' checked={this.state.isHappy} onChange={(e) => this.setState({ isHappy: e.target.checked })} />

                <button type='button' onClick={() => {
                    this.props.onEdit(
                        {
                            id: this.props.user.id,
                            firstname: this.state.firstname,
                            lastname: this.state.lastname,
                            bio: this.state.bio,
                            age: this.state.age,
                            isHappy: this.state.isHappy
                        }
                    )
                }}>
                    Сохранить
                </button>
            </form>
        )
    }
}

export default EditUser;
