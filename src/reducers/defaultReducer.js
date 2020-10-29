export const defaultReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DEFAULT":
      if (!localStorage.getItem("defaultLocations")) {
        localStorage.setItem("defaultLocations", [...state, action.payload]);
      } else {
        localStorage.removeItem("defaultLocations");
        localStorage.setItem("defaultLocations", [...state, action.payload]);
      }
      return [...state, action.payload];
    case "REMOVE_DEFAULT":
      const i = state.indexOf(`${action.payload}`);
      console.log(i);
      console.log(state);
      state.splice(i, 1);
      console.log(state);
      const localDefaultLocations = localStorage.getItem("defaultLocations");
      if (localDefaultLocations) {
        localStorage.removeItem("defaultLocations");
        localStorage.setItem("defaultLocations", [...state]);
      } else {
        if (state.length !== 0)
          localStorage.setItem("defaultLocations", [...state]);
      }
      return [...state];
    default:
      return state;
  }
};
