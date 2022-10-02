import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';

const EditView = () => {
  const { id } = useParams();
  const {
    data: cart,
    error,
    isPending,
  } = useFetch('http://localhost:3001/products/' + id);

  return (
    <div className="edit_cart">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {cart && (
        <article className="edit_about">
          <h2 className="edit_title">{cart.title}</h2>
          <p className="edit_price">{cart.price}</p>
          <p className="edit_description">{cart.description}</p>
        </article>
      )}
    </div>
  );
};

export default EditView;
