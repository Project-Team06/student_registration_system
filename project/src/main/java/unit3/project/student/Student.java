package unit3.project.student;

import unit3.project.course.Course;
import unit3.project.schedule.Schedule;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Table(name="Student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String fName;
    private String lName;
    private String password;


    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<Course> courses = new ArrayList<>();

    public Student(long id, String fName, String lName, String password, Collection<Course> courses) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.password = password;
        this.courses = courses;
    }

    public Student(){

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Collection<Course> getCourses() {
        return courses;
    }

    public void setCourses(Collection<Course> courses) {
        this.courses = courses;
    }

//    public Collection<Schedule> getSchedules() {
//        return schedules;
//    }
//
//    public void setSchedules(Collection<Schedule> schedules) {
//        this.schedules = schedules;
//    }


    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", fName='" + fName + '\'' +
                ", lName='" + lName + '\'' +
                ", password='" + password + '\'' +
                ", courses=" + courses +
                '}';
    }
}