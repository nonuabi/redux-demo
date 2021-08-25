const BUY_CAKE = "BUY_CAKE";

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
        numOfCake: state - 1,
      };
    default:
      return state;
  }
};
