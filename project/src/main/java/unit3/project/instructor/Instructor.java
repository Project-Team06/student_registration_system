package unit3.project.instructor;

import javax.persistence.*;

@Entity
@Table(name= "instructor")
public class Instructor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String FName;
    private String LName;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFName() {
        return FName;
    }

    public void setFName(String FName) {
        this.FName = FName;
    }

    public String getLName() {
        return LName;
    }

    public void setLName(String LName) {
        this.LName = LName;
    }

    public Instructor(){

    }

    public Instructor(Long id, String FName, String LName) {
        this.id = id;
        this.FName = FName;
        this.LName = LName;
    }
}
