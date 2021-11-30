package unit3.project.schedule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ScheduleService {
    private final ScheduleRepository scheduleRepository;
    @Autowired
    public ScheduleService(ScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }

    public List<Schedule> getSchedules(){
        return scheduleRepository.findAll();
    }
    public Schedule getSchedule(int id){
        return scheduleRepository.findById(id).orElse(null);
    }

    public Schedule addSchedule(Schedule schedule){
        return scheduleRepository.save(schedule);
    }

    public Schedule updateSchedule(int id, Schedule data) {
        Schedule schedule= scheduleRepository.findById(id).orElse(null);
        if(schedule != null){
            schedule.setStart_time(data.getStart_time());
            schedule.setEnd_time(data.getEnd_time());
            scheduleRepository.save(schedule);
            return schedule;
        }
        return null;
    }
    public Schedule deleteSchedule(int id) {
        Schedule schedule= scheduleRepository.findById(id).orElse(null);
        scheduleRepository.deleteById(id);
        return schedule;
    }

}