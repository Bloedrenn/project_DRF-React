import React from 'react';

class AddItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            description: "",
            price: 0.0,
            is_available: false
        }

        this.myForm = React.createRef();
    }

    render() {
        return (
            <form ref={this.myForm}>
                <input placeholder='Название' onChange={(e) => this.setState({ name: e.target.value })} />
                <textarea placeholder='Описание' onChange={(e) => this.setState({ description: e.target.value })}></textarea>
                <input placeholder='Цена' onChange={(e) => this.setState({ price: e.target.value })} />

                <label htmlFor='isAvailable'>В наличии:</label>
                <input type='checkbox' id='isAvailable' onChange={(e) => this.setState({ is_available: e.target.checked })} />

                <button type='button' onClick={() => {
                    this.myForm.current.reset()

                    this.props.onAdd(
                        {
                            name: this.state.name,
                            description: this.state.description,
                            price: this.state.price,
                            is_available: this.state.is_available
                        }
                    )

                    this.setState({
                        name: "",
                        description: "",
                        price: 0.0,
                        is_available: false
                    })
                }}>
                    Добавить
                </button>
            </form>
        )
    }
}

export default AddItem;
