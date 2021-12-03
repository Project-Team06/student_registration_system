package unit3.project.instructor;

import com.fasterxml.jackson.annotation.JsonIgnore;
import unit3.project.course.Course;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name= "instructor")
public class Instructor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fname;
    private String lname;

    @JsonIgnore
    @OneToMany(mappedBy = "instructors", fetch = FetchType.EAGER,
            cascade = CascadeType.ALL)
    private Set<Course> course;

    public Instructor(){

    }

    public Instructor(Long id, String fname, String lname, Set<Course> course) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.course = course;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFName() {
        return fname;
    }

    public void setFName(String fname) {
        this.fname = fname;
    }

    public String getLName() {
        return lname;
    }

    public void setLName(String lname) {
        this.lname = lname;
    }

    public Set<Course> getCourse() {
        return course;
    }

    public void setCourse(Set<Course> course) {
        this.course = course;
    }
}
