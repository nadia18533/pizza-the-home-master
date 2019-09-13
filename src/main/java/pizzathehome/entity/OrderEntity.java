package pizzathehome.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name = "orders")
public class OrderEntity extends BaseEntity{

    @Column(name = "date", nullable = false, columnDefinition = "DATE")
    private String date;

    @Column(name = "shipment_state", nullable = false)
    private boolean shipment_state;

    @Column(name = "shipment_time",nullable = false,columnDefinition = "TIME")
    private String time;

    @Column(name="total", nullable = false)
    private String total;

    @ManyToMany
    @JoinTable(name = "order_product",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id"))
    private List<ProductEntity> productEntities;
}
