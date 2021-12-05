const initialState = {
    student: [],
  };
  
  const student = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_STUDENT":
        return {
            student: [...state.student, payload],
        };
     
      default:
        return state;
    }
  };
  
  export default student;
  
  export const addStudent = (student) => {
      console.log("new Student added");
      console.log(student);
    return {
      type: "ADD_STUDENT",
      payload: student,
    };
  };
  


