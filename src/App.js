// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './counterActions';
import './style.css';

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <h1 className='count'>Tổng: {count}</h1>
      <div className='container_button'>
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(decrement())}>Giảm</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <img src='https://user-images.githubusercontent.com/36799589/69492522-e6b41b80-0ec9-11ea-90d3-b37bacad7ca8.png'alt=''/>
      <img id='images2' src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png'alt=''/>
      <p className='copyright'>&copy;	Mọi Bản Quyền Thuộc Về <a href='https://github.com/hvtienprotv84'><span>Huỳnh Vĩnh Tiến</span></a></p>
    </div>
  );
};

export default App;
