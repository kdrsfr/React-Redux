import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../redux/counter/counterSlice';

function Counter() {
  const [number, setNumber] = useState(0);

  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{countValue}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <button onClick={() => dispatch(incrementByAmount(number))}>
        Change by amount
      </button>
    </div>
  );
}

export default Counter;
