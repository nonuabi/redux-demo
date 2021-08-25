const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
//for reactjs -> import redux from 'redux'
const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
// ACTION
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// reducer
// const initialState = {
//   numOfCake: 10,
// };

const initialCakeState = {
  numOfCake: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
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

const initialIceCreamState = {
  numofIceCreams: 20,
};
const iceCreameReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numofIceCreams: state.numofIceCreams - 1,
      };
    default:
      return state;
  }
};

//redux store
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCreame: iceCreameReducer,
});
const store = createStore(rootReducer);
console.log("initialState ", store.getState());
const unSubscribe = store.subscribe(() =>
  console.log("updated state ", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unSubscribe();
