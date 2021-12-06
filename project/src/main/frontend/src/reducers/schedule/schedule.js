const initialState = {
    schedule: [],
  };
  
  const schedule = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_SCHEDULE":
        return {
            schedule: [...state.schedule, payload],
        };
      default:
        return state;
    }
  };
  
  export default schedule;
  
  export const addSchedule = (schedule) => {
    return {
      type: "ADD_SCHEDULE",
      payload: schedule,
    };
  };
  