import React from 'react';

import Item from '../Item/Item';

class Items extends React.Component {
    render() {
        if (this.props.items.length > 0) {
            return (
                <div>
                    {this.props.items.map((item) => (
                        <Item onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={item.id} item={item} />
                    ))}
                </div>
            )
        }
        
        else {
            return (
                <div className="item">
                    <h3>Магазин пуст..</h3>
                </div>
            )
        }
    }
}

export default Items;
