import './App.css';
import  Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <b>The praveen's Application</b>
      <Counter by={1}/>
      <Counter by={2}/>
      <Counter by={5}/>      
    </div>
  );
}



export default App;
