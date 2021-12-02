package unit3.project.student;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import unit3.project.course.Course;
import unit3.project.course.CourseRepository;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository StudentRepository;
    private final CourseRepository courseRepository;


    @Autowired
    public StudentService(StudentRepository StudentRepository, CourseRepository courseRepository) {

        this.StudentRepository = StudentRepository;
        this.courseRepository = courseRepository;
    }

    public List<Student> getStudent(){

        return StudentRepository.findAll();
    }

    public Student getStudents(String id){
        Long student_id = Long.parseLong(id);
        return StudentRepository.findById(student_id).orElse(null);
    }

    public Student createStudent(Student student){
        return StudentRepository.save(student);

    }

    public void deleteStudent(String id){
        Long student_id = Long.parseLong(id);
        StudentRepository.deleteById(student_id);
    }

    public void updateStudent(String id, Student data){
        Long student_id = Long.parseLong(id);
        Student student = StudentRepository.findById(student_id).orElse(null);

        if (student != null){
            student.setfName(data.getfName());
            student.setlName(data.getlName());
            student.setEmail(data.getEmail());
            student.setGender(data.getGender());
            StudentRepository.save(student);
        }

    }
//    public void enrollStudent(Course course, Student student){
//        Student student1 = StudentRepository.findById(student.getId()).orElse(null);
//        Course course1 = courseRepository.findBycourse_id(course.getCourse_id());
//        student1.getCourses().add(course1);
//        StudentRepository.save(student1);
//    }
}
