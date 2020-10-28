export const defaultReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DEFAULT":
      state.unshift(action.payload);
      return state;
    case "REMOVE_DEFAULT":
      const i = state.indexOf(action.payload);
      state.splice(i, 1);
      return state;
    default:
      return state;
  }
};
