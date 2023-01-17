// { desc: string, cant: number }
const initialState = [];

export const add = (payload) => ({
  type: "ADD",
  payload,
});

export const remove = (index) => ({
  type: "DELETE",
  index,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD": {
      return [...state, action.payload];
    }
    case "DELETE": {
      const newState = [...state];
      newState.splice(action.index, 1);
      return newState;
    }
    default: {
      return state;
    }
  }
}
