package pizzathehome.service;

import pizzathehome.entity.UserEntity;

import java.util.List;

public interface UserService {
    void save(UserEntity userEntity);

    List<UserEntity> findAll();

    UserEntity byId(Integer id);
}
