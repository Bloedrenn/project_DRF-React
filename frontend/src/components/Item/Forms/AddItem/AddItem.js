import React from 'react';

import styles from './AddItem.module.css';

class AddItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: null,
            description: null,
            price: null,
            isAvailable: false
        }

        this.myForm = React.createRef();
    }

    render() {
        return (
            <form ref={this.myForm} className={styles.form}>
                <input
                    placeholder='Название'
                    onChange={(e) => this.setState({ 
                        name: e.target.value === "" ? null : e.target.value
                    })}
                />
                <textarea
                    placeholder='Описание'
                    onChange={(e) => this.setState({ 
                        description: e.target.value === "" ? null : e.target.value
                    })}
                >
                </textarea>

                <label htmlFor='price'>Цена</label>
                <input 
                    type="number"
                    id='price'
                    onChange={(e) => this.setState({ 
                        price: e.target.value === "" ? null : Number(e.target.value) 
                    })}
                />

                <label htmlFor='isAvailable'>В наличии:</label>
                <input type='checkbox' id='isAvailable' onChange={(e) => this.setState({ isAvailable: e.target.checked })} />

                <button type='button' onClick={() => {
                    this.myForm.current.reset()

                    this.props.onAdd(
                        {
                            name: this.state.name,
                            description: this.state.description,
                            price: this.state.price,
                            isAvailable: this.state.isAvailable
                        }
                    )

                    this.setState({
                        name: null,
                        description: null,
                        price: null,
                        isAvailable: false
                    })
                }}>
                    Добавить
                </button>
            </form>
        )
    }
}

export default AddItem;
