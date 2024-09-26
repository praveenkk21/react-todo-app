import { useState } from 'react';
import './Counter.css'

export default function Counter({by}) {

    const [count,setCount]=useState(1);

    function counterButtonIncrement(){
        setCount(count+by);
           }
    function counterButtonDecrement(){
        setCount(count-by);
           }
    function counterButtonClear(){
        setCount(0);
           }

    return (
      <div className="Counter">
        <span className="count">{count}</span>
        <div>
            <button className="counterButton" onClick={counterButtonIncrement}>+{by}</button>
            <button className="counterButton" onClick={counterButtonDecrement}>-{by}</button>
        </div>
        <div>
            <button className="counterButtonClear" onClick={counterButtonClear}>Clear</button>
        </div>
      </div>
    );
}