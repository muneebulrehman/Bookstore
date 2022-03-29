import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Input from './Input';

import classes from './Booklist.module.css';

const Booklist = () => {
  const data = useSelector(({ bookReducer }) => bookReducer);

  if (data.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '5rem' }}>
        <h3>No books added yet</h3>
      </div>
    );
  }

  return (
    <section className={classes.library}>
      <div className={classes.allbooks}>
        {data.map((book) => (
          <Book key={book.id} data={book} />
        ))}
        <Book />
      </div>
      <Input />
    </section>
  );
};

export default Booklist;
