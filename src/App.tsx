import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';

function App() {
const {count} = useAppSelector(state => state.userReducer)
  const {increment} = userSlice.actions
  const {decrement} = userSlice.actions
  const dispatch = useAppDispatch()

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(10))}>INCREMENT</button>
      <button onClick={() => dispatch(decrement(10))}>DENCREMENT</button>
    </div>
  );
}

export default App;
