package pizzathehome.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pizzathehome.entity.UserEntity;

import java.util.List;

public interface UserRepository extends JpaRepository <UserEntity, Integer> {
    @Override
    List<UserEntity> findAll();

//    UserEntity byId(Integer id);

    @Query("select c from UserEntity c where c.id = :xxx")
    UserEntity byId(@Param("xxx") Integer id);
}
