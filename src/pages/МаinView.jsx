import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CartList from '../components/CartList';
import InputField from '../components/InputField';
import Pagination from '../components/Pagination';
import MySelect from '../components/MySelect';
import useFetch from '../useFetch';

const МаinView = () => {
  const [cars, setCars] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [selectedSort, setSelectedSort] = useState('');
  const [disabled, setDisabled] = useState([]);

  const {
    data: car,
    isPending,
    error,
  } = useFetch(`http://localhost:3001/products`);

  useEffect(() => {
    setCars(car);
    const fetchSearch = async () => {
      const res = await axios.get(
        `http://localhost:3001/products/?title_like=${query}`
      );
      setCars(res.data);
    };
    fetchSearch();
  }, [car, query]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure that yon want to remove???')) {
      fetch(`http://localhost:3001/products/${id}`, {
        method: 'DELETE',
      })
        .then(setCars(cars.filter((car) => car.id !== id)))
        .catch((error) => console.log(error));
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cars.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const sortCart = (sort) => {
    setSelectedSort(sort);
    setCars([...cars].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  const addToCart = (id) => {
    setDisabled([...disabled, id]);
    console.log(disabled);
    const cart = cars.find((obj) => obj.id === id);
    const addData = {
      ...cart,
      quantity: 1,
    };

    fetch(`http://localhost:3001/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addData),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  };

  return (
    <div className="main_container">
      <div className="main_search">
        <button className="button">
          <Link to="/create">Create</Link>
        </button>
        <InputField setQuery={setQuery} />
        <MySelect
          value={selectedSort}
          defaultValue="Sort"
          onChange={sortCart}
          options={[
            { value: 'title', name: 'For name' },
            { value: 'description', name: 'For description' },
          ]}
        />
      </div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {cars && (
        <CartList
          cars={currentPosts}
          handleDelete={handleDelete}
          addToCart={addToCart}
          disabled={disabled}
        />
      )}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={cars.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default МаinView;
