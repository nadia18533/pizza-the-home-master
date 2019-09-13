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
@Table(name="users")
public class UserEntity extends  BaseEntity{

    @Column(name = "first_name",nullable = false, length =30)
    private  String firstName;

    @Column(name = "last_name",nullable = false,length = 50)
    private  String lastName;

    @Column(name = "city",nullable = false)
    private  String city;

    @Column(name = "street_name",nullable = false)
    private  String street_name;

    @Column(name = "street_number",nullable = false)
    private  String street_number;

    @Column(name = "apartment",nullable = false)
    private  String apartment;

    @Column(name ="phone_number", nullable = false,length = 15,unique = true)
    private  String phoneNumber;

    @Column( name="email",nullable = false,length = 50,unique = true)
    private  String email;

    @Column(nullable = false)
    private  String password;

    @Column(name = "user_is_admin", nullable = false)
    private boolean user_is_admin;

    @OneToMany
    @JoinColumn(name = "user_id")
    private Set<OrderEntity> orderEntity;

}
