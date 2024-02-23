import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [sortName, setSortName] = useState('Change to Descending Order');
  const [ascending, setAscending] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const changeSortOrderHandler = () => {
    
    setAscending((prevAscending) => !prevAscending);

    setSortName((prevSortName) =>
      prevSortName === 'Change to Descending Order'
        ? 'Change to Ascending Order'
        : 'Change to Descending Order'
    );
  };

  const listItems = useMemo(() => {
    if (ascending) {
    console.log(ascending);

      return [5, 3, 1, 10, 9].sort((a, b) => a - b);
    } else {
    console.log(ascending);

      return [5, 3, 1, 10, 9].sort((a, b) => b - a);
    }
  }, [ascending]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeSortOrderHandler}>{sortName}</Button>
    </div>
  );
}

export default App;
