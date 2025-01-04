import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/common.css';
import { addToCart, removeFromCart } from '../redux/action/cartAction';

const ExampleComponent = () => {
  const dispatch = useDispatch();

  // Fetch product data
  const data = useSelector((state) => state.example?.data || []);
  // Fetch cart items
  const cart = useSelector((state) => state.cart?.items || []);

  useEffect(() => {
    dispatch({ type: 'FETCH_DATA' });
  }, [dispatch]);

  // Check if an item exists in the cart
  const isInCart = (itemId) => cart.some((cartItem) => cartItem.id === itemId);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item.id));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div>
      {data.length > 0 ? (
        <ul className="main-container">
          {data.map((item) => (
            <div key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <h3 className="heading">{item.title}</h3>
              <strong>
                <p>Price: ${item.price}</p>
              </strong>
              <div>
                {isInCart(item.id) ? (
                  <button
                    style={{ backgroundColor: 'red', color: '#fff' }}
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    style={{ backgroundColor: 'green', color: '#fff' }}
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default ExampleComponent;
