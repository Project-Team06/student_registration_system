const initialState = {
    thursday: [],
  };
  
  const thursday = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_TO_THURSDAY":
        return {
          thursday: [...state.thursday, payload],
        };
      
      default:
        return state;
    }
  };
  
  export default thursday;
  
  export const AddToThursday = (thursday) => {
      console.log("course added to thursday");
      console.log(thursday);
    return {
      type: "ADD_TO_THURSDAY",
      payload: thursday,
    };
  };