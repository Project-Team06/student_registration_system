import MenuItem from "./MenuItem";

function Menu({ courses, setCourses }) {
  return (
    <>
      <div class="content">
        <div class="dropdown">
          <button class="dropbtn">Course name:</button>
          <div class="dropdown-content">
            {courses.map((course) => {
              return <MenuItem course={course} setCourses={setCourses} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Menu;
