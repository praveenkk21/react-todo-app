import { useState } from 'react';
import './Counter.css'

export default function Counter() {

    const [count,setCount]=useState(0);

    function counterButtonIncrement(){
        setCount(count+1);
        //console.log("clicked");
    }
    function counterButtonDecrement(){
        setCount(count-1);
        //console.log("clicked");
    }

    return (
      <div className="Counter">
        <span className="count">{count}</span>
        <div>
            <button className="counterButton" onClick={counterButtonIncrement}>+1</button>
            <button className="counterButton" onClick={counterButtonDecrement}>-1</button>
        </div>
      </div>
    );
}