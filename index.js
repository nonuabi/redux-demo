//for reactjs -> import redux from 'redux'
const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// ACTION TYPE
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

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
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initialState ", store.getState());
const unSubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unSubscribe();
