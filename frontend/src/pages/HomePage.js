import Items from '../components/Items/ItemList/Items';
import AddItem from '../components/Items/AddItemForm/AddItem';

const HomePage = ({ items, onAdd, onEdit, onDelete }) => (
    <>
        <main>
            <Items items={items} onEdit={onEdit} onDelete={onDelete} />
        </main>
        <aside>
            <AddItem onAdd={onAdd} />
        </aside>
    </>
);

export default HomePage;
