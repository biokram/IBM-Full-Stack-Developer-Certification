import React from 'react';
import './ProductList.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './CartSlice';


const ProductList = () => {
  
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map((product)=> {
          const isAlreadyInCart = cartItems.some(item => item.id === product.id);
          return (
            <li key={product.id} className="product-list-item">
              <span>{product.name} - ${product.price}</span>
              <button 
                className={`add-to-cart-button ${isAlreadyInCart ? 'disabled' : ''}`}
                onClick={() => handleAddToCart(product)} 
                disabled={isAlreadyInCart}
              >
                {isAlreadyInCart ? 'Added' : 'Add to Cart'}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
