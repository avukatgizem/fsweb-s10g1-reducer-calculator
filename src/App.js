import React, { useReducer } from 'react';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { useSelector, useDispatch } from 'react-redux';
import { addOne } from './actions';


export const initialState = {
  total: 100,
  operation: '*',
  memory: 100
};

function reducer(state, action) {
  switch(action.type) {
    case 'add':
      return { ...state, total: state.total + action.value };
    case 'subtract':
      return { ...state, total: state.total - action.value };
    case 'clear':
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reduxTotal = useSelector(state => state.total);
  const dispatchRedux = useDispatch();

  const handleAddOneClick = () => {
    dispatchRedux(addOne());
  }
  const handleOneClick = () => {
    dispatch(addOne());
  }

   return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />

            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
              
            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleOneClick} />
              <CalcButton value={2} onClick={() => dispatch({ type: 'add', value: 2 })} />
              <CalcButton value={3} onClick={() => dispatch({ type: 'add', value: 3 })} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => dispatch({ type: 'add', value: 4 })} />
              <CalcButton value={5} onClick={() => dispatch({ type: 'add', value: 5 })} />
              <CalcButton value={6} onClick={() => dispatch({ type: 'add', value: 6 })} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => dispatch({ type: 'add', value: 7 })} />
              <CalcButton value={8} onClick={() => dispatch({ type: 'add', value: 8 })} />
              <CalcButton value={9} onClick={() => dispatch({ type: 'add', value: 9 })} />
            </div>

            <div className="row">
              <CalcButton value={"+"} />
              <CalcButton value={"*"} />
              <CalcButton value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch({ type: 'clear' })} />
            </div>

            <div className="row mt-3">
              <div className="col-md-12 d-flex justify-content-center">
                <h1>Total: {reduxTotal}</h1>
                <button onClick={handleAddOneClick}>Add One</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
 