package unit3.project.instructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class InstructorService {

    @Autowired
    private InstructorRepository instructorRepository;


    public Instructor addInstructor( Instructor instructor){
        return instructorRepository.save(instructor);
    }


    public List<Instructor> getAllInstructor(){
        return instructorRepository.findAll();
    }

    public Instructor getInstructor(String id){
        Long todoId =Long.parseLong(id);
        return instructorRepository.findById(todoId).orElse(null);
    }

    public void updateInstructor(String id, Instructor data){
        Long updateInstructor = Long.parseLong(id);
        Instructor instructor = instructorRepository.findById(updateInstructor).orElse(null);

        if(instructor != null){
            instructor.setFName(data.getFName());
            instructor.setLName(data.getLName());
            instructorRepository.save(instructor);
        }
    }

    public void deleteInstructor(@PathVariable String id){
        Long deleteId = Long.parseLong(id);
        instructorRepository.deleteById(deleteId);
    }
}
