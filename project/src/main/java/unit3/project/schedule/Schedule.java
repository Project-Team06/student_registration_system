package unit3.project.schedule;

import javax.persistence.*;

@Entity
@Table(name="schedule")
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int schedule_id;


    public Schedule() {
    }

    public Schedule(int schedule_id) {
        this.schedule_id = schedule_id;

    }

    public int getSchedule_id() {
        return schedule_id;
    }

    public void setSchedule_id(int schedule_id) {
        this.schedule_id = schedule_id;
    }

}