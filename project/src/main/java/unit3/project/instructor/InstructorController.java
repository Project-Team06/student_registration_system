package unit3.project.instructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path= "instructor")
public class InstructorController {

    @Autowired
    private InstructorService instructorService;

    @PostMapping
    public Instructor addInstructor(@RequestBody Instructor instructor){
        return instructorService.addInstructor(instructor);
    }

    @GetMapping
    public List<Instructor> getAllInstructor(){
        return instructorService.getAllInstructor();
    }

    @GetMapping("/{id}")
    public Instructor getInstructor(@PathVariable String id){
        return instructorService.getInstructor(id);
    }

    @PutMapping("/{id}")
    public void updateInstructor(@PathVariable String id , @RequestBody Instructor instructor){
        instructorService.updateInstructor(id, instructor);
    }

    @DeleteMapping("/{id}")
    public void deleteInstructor(@PathVariable String id){
        instructorService.deleteInstructor(id);
    }
}
