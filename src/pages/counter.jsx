import React from 'react';
import '../css/counter.css';
function Counter() {
  // let count = 2;
  const [count, setCount] = React.useState(1);

  const increment = () => {
    // alert('increment');
    // Count = Count + 1;
    setCount(count + 1);
    console.log(count);
  };
  const decrement = () => {
    // alert('decrement');
    // Count = Count + 1;
    setCount(count - 1);
    console.log(count);
  };
  return (
    <div class="counter">
      <button className="bndec" onClick={decrement}>
        -
      </button>
      <span className="countnum">{count}</span>
      <button className="bninc" onClick={increment}>
        +
      </button>
    </div>
  );
}
export default Counter;
