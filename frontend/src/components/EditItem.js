import React from 'react';

class EditItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.item.name,
            description: this.props.item.description,
            price: this.props.item.price,
            isAvailable: this.props.item.isAvailable
        }
    }

    render() {
        return (
            <form>
                <input placeholder='Название' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <textarea placeholder='Описание' value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })}></textarea>
                
                <label htmlFor='price'>Цена</label>
                <input 
                    type="number"
                    id='price'
                    value={this.state.price}
                    onChange={(e) => this.setState({ price: Number(e.target.value) })}
                />

                <label htmlFor='isAvailable'>В наличии:</label>
                <input type='checkbox' id='isAvailable' checked={this.state.isAvailable} onChange={(e) => this.setState({ isAvailable: e.target.checked })} />

                <button type='button' onClick={() => {
                    this.props.onEdit(
                        {
                            id: this.props.item.id,
                            name: this.state.name,
                            description: this.state.description,
                            price: this.state.price,
                            isAvailable: this.state.isAvailable
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
