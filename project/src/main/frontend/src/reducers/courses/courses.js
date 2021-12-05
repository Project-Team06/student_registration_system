const initialState = {
    courses: [],
  };
  
  const courses = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_COURSES":
        return {
          courses: [...state.courses, payload],
        };
      case "CLEAR_COURSES":
        return {
          courses: [],
        };
      case "DELETE_COURSE": 
      return{
            courses: state.courses.filter(course => payload !== course),
      };
      default:
        return state;
    }
  };
  
  export default courses;
  
  export const addCourse = (courses) => {
      console.log("new Course added");
      console.log(courses);
    return {
      type: "ADD_COURSES",
      payload: courses,
    };
  };
  
  export const clearCourses = () => {
    return {
      type: "CLEAR_COURSES",
    };
  };

  export const removeCourse = (course) => {
    console.log("remove Course ");
    console.log(course);
  return {
    type: "DELETE_COURSE",
    payload: course,
  };
};
  