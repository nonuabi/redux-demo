const BUY_CAKE = "BUY_CAKE";
//for reactjs -> import redux from 'redux'
const redux = require("redux");
const createStore = redux.createStore;
// ACTION
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}

// reducer
const initialState = {
  numOfCake: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};

//redux store
const store = createStore(reducer);
console.log("initialState ", store.getState());
const unSubscribe = store.subscribe(() =>
  console.log("updated state ", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unSubscribe();
