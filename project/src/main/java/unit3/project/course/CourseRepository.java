package unit3.project.course;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course,String>{
//    Course findBycourse_id(String course_id);
}
