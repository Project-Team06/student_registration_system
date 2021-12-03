package unit3.project.course;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import unit3.project.instructor.Instructor;
import unit3.project.schedule.Schedule;
import unit3.project.student.Student;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name="course")
public class Course {
    @Id
    String course_id;
    String name;
    String start_time;
    String end_time;
    String day;
    String final_exam_date;
    String date;
    int hours;
    String room_id;

    @JsonIgnore
    @ManyToMany(mappedBy = "courses")
    private Collection<Student> students = new ArrayList<>();

//    public Collection<Student> getStudents() {
//        return students;
//    }

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "instructor_id", nullable = false)
    @JsonProperty(access = JsonProperty.Access.READ_WRITE) // ارسل معلومات المدرس ID  في البوست مان Json
    private Instructor instructors;


    @ManyToMany
    private List<Schedule> schedule;

    public Course() {
    }

    public Course(String course_id, String name, String start_time, String end_time, String day, String final_exam_date, String date, int hours, String room_id, Collection<Student> students, Instructor instructors, List<Schedule> schedule) {
        this.course_id = course_id;
        this.name = name;
        this.start_time = start_time;
        this.end_time = end_time;
        this.day = day;
        this.final_exam_date = final_exam_date;
        this.date = date;
        this.hours = hours;
        this.room_id = room_id;
        this.students = students;
        this.instructors = instructors;
        this.schedule = schedule;
    }

    public String getCourse_id() {
        return course_id;
    }

    public void setCourse_id(String course_id) {
        this.course_id = course_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStart_time() {
        return start_time;
    }

    public void setStart_time(String start_time) {
        this.start_time = start_time;
    }

    public String getEnd_time() {
        return end_time;
    }

    public void setEnd_time(String end_time) {
        this.end_time = end_time;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getFinal_exam_date() {
        return final_exam_date;
    }

    public void setFinal_exam_date(String final_exam_date) {
        this.final_exam_date = final_exam_date;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getHours() {
        return hours;
    }

    public void setHours(int hours) {
        this.hours = hours;
    }

    public String getRoom_id() {
        return room_id;
    }

    public void setRoom_id(String room_id) {
        this.room_id = room_id;
    }

    public Instructor getInstructors() {
        return instructors;
    }

    public void setInstructors(Instructor instructors) {
        this.instructors = instructors;
    }

    public List<Schedule> getSchedule() {
        return schedule;
    }

    public void setSchedule(List<Schedule> schedule) {
        this.schedule = schedule;
    }
}
