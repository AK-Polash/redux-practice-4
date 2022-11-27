let { createStore } = require("redux");
let ADD_USER = "ADD_USER";

// State:
let initialState = {
  count: 1,
  users: ["Polash"],
};

// Action:
let addUserAction = (value) => {
  return {
    type: ADD_USER,
    payload: value,
  };
};

// Reducer:
let addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        count: state.count + 1,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

// Store:
let store = createStore(addUserReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch Actions:
store.dispatch(addUserAction("Dulon"));
store.dispatch(addUserAction("Rakib"));
store.dispatch(addUserAction("Emon"));
