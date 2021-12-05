const initialState = {
    monday: [],
  };
  
  const monday = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_TO_MONDAY":
        return {
          monday: [...state.monday, payload],
        };
      
      default:
        return state;
    }
  };
  
  export default monday;
  
  export const AddToMonday = (monday) => {
      console.log("course added to monday");
      console.log(monday);
    return {
      type: "ADD_TO_MONDAY",
      payload: monday,
    };
  };
  