import React from 'react';

class EditItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.item.name,
            description: this.props.item.description,
            price: this.props.item.price,
            is_available: this.props.item.is_available
        }
    }

    render() {
        return (
            <form>
                <input placeholder='Название' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <textarea placeholder='Описание' value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })}></textarea>
                <input placeholder='Цена' value={this.state.price} onChange={(e) => this.setState({ price: e.target.value })} />

                <label htmlFor='isAvailable'>В наличии:</label>
                <input type='checkbox' id='isAvailable' checked={this.state.is_available} onChange={(e) => this.setState({ is_available: e.target.checked })} />

                <button type='button' onClick={() => {
                    this.props.onEdit(
                        {
                            id: this.props.item.id,
                            name: this.state.name,
                            description: this.state.description,
                            price: this.state.price,
                            is_available: this.state.is_available
                        }
                    )
                }}>
                    Сохранить
                </button>
            </form>
        )
    }
}

export default EditItem;
