export const defaultReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DEFAULT_LOCATION":
      // Set new default location in localstorage
      if (!localStorage.getItem("defaultLocations")) {
        localStorage.setItem("defaultLocations", [...state, action.payload]);
      } else {
        localStorage.removeItem("defaultLocations");
        localStorage.setItem("defaultLocations", [...state, action.payload]);
      }
      // Return initial state and add new default location to them
      return [...state, action.payload];
    case "REMOVE_DEFAULT_LOCATION":
      // Remove default location from state
      const newState = state.filter((t) => t !== action.payload);
      // Change localstorage accordingly
      const localDefaultLocations = localStorage.getItem("defaultLocations");
      if (localDefaultLocations) {
        localStorage.removeItem("defaultLocations");
        localStorage.setItem("defaultLocations", [...newState]);
      } else {
        if (state.length !== 0)
          localStorage.setItem("defaultLocations", [...newState]);
      }
      // Return filtered state
      return [...newState];
    default:
      return state;
  }
};
