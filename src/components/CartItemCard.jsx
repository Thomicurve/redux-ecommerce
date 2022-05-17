import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../reducers/cartReducer';

const CardItemCard = ({ product, formatPrice }) => {
    const dispatch = useDispatch();
    const handleDeleteProduct = () => dispatch(deleteProduct(product.title));

    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{product.title}</div>
                {formatPrice(product.price)}
            </div>
            <Badge bg="primary" pill>
                {product.amount}
            </Badge>
            <Badge onClick={handleDeleteProduct} bg="danger ms-2" style={{ cursor: 'pointer' }} >
                X
            </Badge>
        </ListGroup.Item>

    )
}

export default CardItemCard;