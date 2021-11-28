package unit3.project.schedule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path= "schedule")
public class ScheduleController {
    private final ScheduleService scheduleService;
    @Autowired
    public ScheduleController(ScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }

    @GetMapping
    public List<Schedule> getSchedules(){
        return scheduleService.getSchedules();
    }

    @GetMapping(path = "/{id}")
    public Schedule getSchedule(@PathVariable int id){
        return scheduleService.getSchedule(id);
    }

    @PostMapping
    public Schedule addSchedule(@RequestBody Schedule schedule){
        return scheduleService.addSchedule(schedule);
    }

    @PutMapping("/{id}")
    public Schedule updateSchedule(@PathVariable int id, @RequestBody Schedule schedule){
        return scheduleService.updateSchedule(id, schedule);
    }

    @DeleteMapping ("/{id}")
    public Schedule deleteSchedule(@PathVariable int id){
        return scheduleService.deleteSchedule(id);
    }
}