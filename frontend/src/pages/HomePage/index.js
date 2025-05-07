import ItemList from '../../components/Item/ItemList';
import AddItem from '../../components/Item/Forms/AddItem';

import styles from './HomePage.module.css';

const HomePage = ({ items, onAdd, onEdit, onDelete }) => (
    <>
        <main className={styles.main}>
            <ItemList items={items} onEdit={onEdit} onDelete={onDelete} />
        </main>
        <aside className={styles.aside}>
            <AddItem onAdd={onAdd} />
        </aside>
    </>
);

export default HomePage;
