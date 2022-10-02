import React from 'react';
import styles from './InputField.module.scss';

const InputField = ({ setQuery }) => {
  return (
    <input
      placeholder="Search...."
      className={styles.input}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default InputField;
