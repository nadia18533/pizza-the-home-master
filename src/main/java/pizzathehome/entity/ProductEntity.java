package pizzathehome.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name = "products")

public class ProductEntity extends BaseEntity{



    @Column(name = "image_path",nullable = false,length = 150)
    private  String imagePath;

    @Column(name = "name",nullable =false)
    private String name;

    @Column(name = "price",columnDefinition = "INT")
    private BigDecimal price;

    @Column(name = "weight", nullable = false)
    private String weight;

    @Column(name = "product_type",nullable = false)
    private String product_type;

//   @ManyToOne
//   @JoinColumn(name = "product_type_id")
//   private TypeEntity typeEntity;

   @ManyToMany
   @JoinTable(name = "product_ingredient",
   joinColumns = @JoinColumn(name = "product_id"),
   inverseJoinColumns = @JoinColumn(name = "ingredient_id"))
    private List<IngredientEntity> ingredientEntities;
}
