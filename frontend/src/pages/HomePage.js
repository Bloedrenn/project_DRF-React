import ItemList from '../components/ItemComponent/ItemList';
import AddItem from '../components/ItemComponent/Forms/AddItem';

const HomePage = ({ items, onAdd, onEdit, onDelete }) => (
    <>
        <main>
            <ItemList items={items} onEdit={onEdit} onDelete={onDelete} />
        </main>
        <aside>
            <AddItem onAdd={onAdd} />
        </aside>
    </>
);

export default HomePage;
