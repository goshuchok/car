import React from 'react';
import { Link } from 'react-router-dom';

const CartList = ({ cars, handleDelete, addToCart, disabled }) => {
  return (
    <div className="content__items">
      {cars &&
        cars.map((value) => {
          return (
            <div key={value.id} className="cart__item">
              <div className="cart__item-info">
                <h3>{value.title}</h3>
                <h5>{value.price}</h5>
                <p>{value.description}</p>
              </div>
              <div className="cart__item-count">
                <Link className="button" to={`/edit/${value.id}`}>
                  Edit
                </Link>
                <button
                  className="button_delete"
                  onClick={() => handleDelete(value.id)}
                >
                  Delete
                </button>
                <button
                  className="button clicked"
                  disabled={disabled.indexOf(value.id) !== -1}
                  onClick={() => addToCart(value.id)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CartList;
