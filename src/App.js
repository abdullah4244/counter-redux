
import './App.css';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
function App() {

 const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({type:"INC",payload:3});
  }
  const handleDecrement = () => {
    dispatch({type:"DEC",payload:1});
  }
  const state = useSelector((state)=>state);
  return (
    <div className="App">
      
      <div className="jumbotron container mt-5">
        <h1>{state}</h1>
        <div className="d-flex justify-content-center">
          <button onClick = {handleIncrement} className="btn btn-success mr-2">Increment</button>
          <button onClick = {handleDecrement} className="btn btn-danger">Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
