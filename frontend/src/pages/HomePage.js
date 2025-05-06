import Items from '../components/ItemList/Items';
import AddItem from '../components/AddItem';

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
