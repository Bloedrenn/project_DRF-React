import React from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

class ItemDetailPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            item: null,
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        const { id } = this.props;
        axios.get(`/api/items/${id}/`)
            .then(response => {
                const { is_available, ...rest } = response.data;
                this.setState({
                    item: {
                        ...rest,
                        isAvailable: is_available
                    },
                    loading: false
                });
            })
            .catch(error => {
                console.error('Ошибка загрузки товара:', error);

                this.setState({
                    error: 'Ошибка! Не удалось загрузить товар',
                    loading: false
                });
            });
    }

    render() {
        const { item, loading, error } = this.state;

        if (loading) return <div>Загрузка...</div>;
        if (error) return <div>{error}</div>;

        return (
            <div className="item-detail">
                <Link to="/">← Назад к списку</Link>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <div className="price">Цена: {item.price}$</div>
                <div className="availability">
                    {item.isAvailable ? 'Есть в наличии' : 'Нет в наличии'}
                </div>
            </div>
        );
    }
}

// Обертка для использования хука useParams
export default function WrappedItemDetailPage() {
    const { id } = useParams();
    return <ItemDetailPage id={id} />;
}
