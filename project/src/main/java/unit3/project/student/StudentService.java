package unit3.project.student;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository StudentRepository;

    @Autowired
    public StudentService(StudentRepository StudentRepository) {

        this.StudentRepository = StudentRepository;
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
}
