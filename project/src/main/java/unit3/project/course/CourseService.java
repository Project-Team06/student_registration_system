package unit3.project.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    private final CourseRepository courseRepository;
    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> getCourses(){
        return courseRepository.findAll();
    }
    public Course getCourse(String id){
        return courseRepository.findById(id).orElse(null);
    }

    public Course addCourse(Course course){
        return courseRepository.save(course);
    }

    public Course updateCourse(String id, Course data) {
        Course course= courseRepository.findById(id).orElse(null);
        if(course != null) {
            course.setName(data.getName());
            course.setStart_time(data.getStart_time());
            course.setEnd_time(data.getEnd_time());
            course.setDay(data.getDay());
            course.setFinal_exam_date(data.getFinal_exam_date());
            course.setHours(data.getHours());
            courseRepository.save(course);
            return course;
        }
        return null;
    }
    public Course deleteCourse(String id) {
        Course course = courseRepository.findById(id).orElse(null);
        courseRepository.deleteById(id);
        return course;
    }

}