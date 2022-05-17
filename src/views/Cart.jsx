import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ListGroup } from 'react-bootstrap';

import CardItemCard from '../components/CartItemCard';

const Cart = () => {

    const { invoice, cartProducts, formatPrice } = useCart();

    return (
        <section>
            <h1 className='text-light text-center mt-5'>Cart <FontAwesomeIcon size='xs' icon={faCartShopping} /></h1>
            {
                cartProducts.length <= 0
                    ? <div className='d-flex flex-column align-items-center'>
                        <h3 className='text-light mt-5'>You don't have products in your cart</h3>
                        <Link to='/' className='btn btn-primary mt-3'>Go to store!</Link>
                    </div>
                    : <>
                        <ListGroup as="ol" className="mx-auto mt-5 w-75">
                            {invoice.products.map(product => (
                                <CardItemCard key={product.id} formatPrice={formatPrice} product={product} />
                            ))}
                        </ListGroup>
                        <div className='w-100 d-flex flex-column align-content-center'>
                            <p className='text-light text-center mt-3'>Total: {formatPrice(invoice.finalPrice)}</p>
                            <button className='btn btn-success mx-auto' style={{width: '100px'}}>Buy</button>
                        </div>
                    </>

            }
        </section>
    )
}

export default Cart;