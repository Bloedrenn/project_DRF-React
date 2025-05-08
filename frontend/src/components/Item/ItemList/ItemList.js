import React from 'react';

import ItemCard from '../ItemCard';

const ItemList = ({ items, onEdit, onDelete }) => {
    return items.length > 0 ? (
        <div>
            {items.map((item) => (
                <ItemCard
                    key={item.id}
                    item={item}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    ) : (
        <div>
            <h3>Магазин пуст..</h3>
        </div>
    );
};

export default ItemList;