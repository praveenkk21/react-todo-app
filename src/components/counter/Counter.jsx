import { useState } from 'react';
import './Counter.css'
import CounterButton from './CounterButton'

export default function Counter() {

    const [count,setCount]=useState(0);

    function counterButtonIncrement(by){
        setCount(count+by);
           }
    function counterButtonDecrement(by){
        setCount(count-by);
           }
    function counterButtonClear(){
        setCount(0);
           }

    return (
      <div className="Counter">
        <span className="count">{count}</span>
            <CounterButton by={1} incrementMethod={counterButtonIncrement} decrementMethod={counterButtonDecrement}/>
            <CounterButton by={2} incrementMethod={counterButtonIncrement} decrementMethod={counterButtonDecrement}/>
            <CounterButton by={5} incrementMethod={counterButtonIncrement} decrementMethod={counterButtonDecrement}/> 
            <button className="counterButtonClear" onClick={counterButtonClear}>Reset</button>     
     </div>
    );
}


