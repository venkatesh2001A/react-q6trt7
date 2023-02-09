import React from 'react';
import '../css/counter.css';
function Counter() {
  let count = 2 
  const [count,setcount] = React.useState(1))``
  const increment = () => {
    setCount(count + 1 )
    console.log(count)
  }
  const decrement = () => {
    setCount(count  - 1)
    console.log(count)
  }
  return (
    <div className="phone">
      <button Classname="phone" onclick= >-</button>
      <span>1</span>
      <button>+</button>
    </div>
  );
}
export default Counter;
