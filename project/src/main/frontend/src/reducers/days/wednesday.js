const initialState = {
    wednesday: [],
  };
  
  const wednesday = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_TO_WEDNESDAY":
        return {
          wednesday: [...state.wednesday, payload],
        };
      
      default:
        return state;
    }
  };
  
  export default wednesday;
  
  export const AddToWednesday = (wednesday) => {
      console.log("course added to wednesday");
      console.log(wednesday);
    return {
      type: "ADD_TO_WEDNESDAY",
      payload: wednesday,
    };
  };