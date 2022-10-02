import React from 'react';
import styles from './Cart.module.scss';

const Cart = ({ carts, onDelete, handleDelete, onAdd }) => {
  return (
    <div className={styles.cart_container}>
      {carts &&
        carts.map((value) => {
          return (
            <div key={value.id} className={styles.cart_view}>
              <div className={styles.cart_description}>
                <h3 className={styles.cart_title}>{value.title}</h3>
                <p className={styles.cart_price}>{value.price}</p>
                <p className={styles.cart_about}>{value.description}</p>
              </div>
              <div className={styles.cart_button}>
                <div className={styles.button_calculate}>
                  <button
                    className={styles.cart_dec}
                    onClick={() => onDelete(value.id)}
                    disabled={value.quantity === 1}
                  >
                    -1
                  </button>
                  <p className={styles.cart_value}>{value.quantity}</p>
                  <button
                    className={styles.cart_add}
                    onClick={() => onAdd(value.id)}
                  >
                    +1
                  </button>
                </div>
                <button
                  className={styles.button_delete}
                  onClick={() => handleDelete(value.id)}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
