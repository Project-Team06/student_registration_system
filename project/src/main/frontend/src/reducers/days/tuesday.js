const initialState = {
    tuesday: [],
  };
  
  const tuesday = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_TO_TUESDAY":
        return {
          tuesday: [...state.tuesday, payload],
        };
      
      default:
        return state;
    }
  };
  
  export default tuesday;
  
  export const AddToTuesday = (tuesday) => {
      console.log("course added to tuesday");
      console.log(tuesday);
    return {
      type: "ADD_TO_TUESDAY",
      payload: tuesday,
    };
  };