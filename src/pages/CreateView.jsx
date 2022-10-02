import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateView = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const cart = { title, price, description };
    setDescription(true);
    fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cart),
    })
      .then(() => {
        console.log('new car added');
        setIsPending(false);
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <h2>Add new Car</h2>

      <form onSubmit={handleSubmit} className="create_container">
        <label className="create_label">Car Title:</label>
        <input
          className="create_input"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New car..."
        />
        <label className="create_label">Car Price:</label>
        <input
          className="create_input"
          type="number"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Type price"
        />
        <label className="create_label">Car Description:</label>
        <input
          className="create_input"
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        {!isPending && <button className="button">Save</button>}
        {isPending && <button disabled>Adding car...</button>}
      </form>
    </div>
  );
};

export default CreateView;
