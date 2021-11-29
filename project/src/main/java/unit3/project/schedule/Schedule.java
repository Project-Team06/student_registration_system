package unit3.project.schedule;

import javax.persistence.*;

@Entity
@Table(name="schedule")
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int schedule_id;
    String start_time;
    String end_time;

    public Schedule() {
    }

    public Schedule(int schedule_id, String start_time, String end_time) {
        this.schedule_id = schedule_id;
        this.start_time = start_time;
        this.end_time = end_time;
    }

    public int getSchedule_id() {
        return schedule_id;
    }

    public void setSchedule_id(int schedule_id) {
        this.schedule_id = schedule_id;
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
}