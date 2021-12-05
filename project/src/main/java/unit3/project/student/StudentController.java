package unit3.project.student;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import unit3.project.course.Course;

import java.util.List;

@RestController
@RequestMapping(path="students")
@CrossOrigin("*")
public class StudentController {

    private final StudentService StudentService;

    @Autowired
    public StudentController(StudentService StudentService) {

        this.StudentService = StudentService;
    }

    @GetMapping
    public List<Student> getStudent(){
        return StudentService.getStudent();
    }

    @GetMapping("/{id}")
    public Student getStudents(@PathVariable String id){
        return StudentService.getStudents(id);
    }

    @PostMapping
    public Student createStudent(@RequestBody Student student){
        return StudentService.createStudent(student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable String id){
        StudentService.deleteStudent(id);
    }
    @PutMapping("/{id}")
    public void updateStudent(@PathVariable String id, @RequestBody Student data){
        StudentService.updateStudent(id, data);
    }

}
