package pizzathehome.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name = "ingredients")
public class IngredientEntity extends BaseEntity{
    @Column(name = "name",nullable = false)
    private String name;



}
