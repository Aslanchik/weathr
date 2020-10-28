/* export const weatherReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DEFAULT_SUCC":
      return [...state, action.payload];
    case "FETCH_DEFAULT_FAIL":
      return state;
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
 */
