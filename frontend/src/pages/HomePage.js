import Items from '../components/ItemComponent/ItemList';
import AddItem from '../components/ItemComponent/AddItemForm/AddItem';

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
