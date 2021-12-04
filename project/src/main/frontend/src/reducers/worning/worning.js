const initialState = {
  worning: "",
};

const worning = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_WORNING":
      return {
        worning: payload,
      };
    default:
      return state;
  }
};

export default worning;

export const addWorning = (worning) => {
  return {
    type: "ADD_WORNING",
    payload: worning,
  };
};
