const initialState = {
    sunday: [],
  };
  
  const sunday = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_TO_SUNDAY":
        return {
          sunday: [...state.sunday, payload],
        };
      
      default:
        return state;
    }
  };
  
  export default sunday;
  
  export const AddToSunday = (sunday) => {
      console.log("course added to sunday");
      console.log(sunday);
    return {
      type: "ADD_TO_SUNDAY",
      payload: sunday,
    };
  };
  