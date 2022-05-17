import React from 'react';
import useCart from '../hooks/useCart';

const Cart = () => {

    const { invoice } = useCart();

    return (
        <section>
            <h1 className='text-light'>These are the cart products</h1>
            {invoice.products.map(product => (
                <div key={product.id}>
                    <h5>{product.title}</h5>
                    <h6>x{product.amount}</h6>
                    <p>{new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR"
                    }).format(product.price)}</p>
                </div>
            ))}
            <p className='text-light'>Total: {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(invoice.finalPrice)}</p>
        </section>
    )
}

export default Cart;