import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart';

const CartView = () => {
  const [carts, setCarts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const totalPrice = carts.reduce((sum, obj) => {
    return obj.price * obj.quantity + sum;
  }, 0);
  useEffect(() => {
    fetch('http://localhost:3001/cart')
      .then((res) => res.json())
      .then((data) => setCarts(data))
      .catch((err) => console.log(err.message));
  }, []);
  const handleDelete = (id) => {
    if (window.confirm('Are you sure that yon want to remove???')) {
      fetch(`http://localhost:3001/cart/${id}`, {
        method: 'DELETE',
      })
        .then(setCarts(carts.filter((cart) => cart.id !== id)))
        .catch((err) => console.log(err.message));
    }
  };
  const onAdd = (id) => {
    const findItem = carts.find((item) => item.id === id);
    if (findItem) {
      findItem.quantity++;
    }
    setQuantity(findItem.quantity);
  };

  const onDelete = (id) => {
    const findItem = carts.find((item) => item.id === id);
    if (findItem) {
      findItem.quantity--;
    }

    setQuantity(findItem.quantity);
  };

  return (
    <div className="container">
      <div className="carts_view">
        <div className="carts_description">
          <h2>
            Total Price: <span className="carts_price">{totalPrice}</span>
          </h2>
          <Link className="link" to="/">
            Home
          </Link>
        </div>
        <Cart
          carts={carts}
          onDelete={onDelete}
          handleDelete={handleDelete}
          onAdd={onAdd}
        />
      </div>
    </div>
  );
};

export default CartView;
