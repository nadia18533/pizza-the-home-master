package pizzathehome.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pizzathehome.entity.UserEntity;
import pizzathehome.repository.UserRepository;
import pizzathehome.service.UserService;

import java.util.List;
@Service
public class UserImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Override
    public void save(UserEntity userEntity) {
    userRepository.save(userEntity);
    }

    @Override
    public List<UserEntity> findAll() {
        return userRepository.findAll();
    }

    @Override
    public UserEntity byId(Integer id) {
        return userRepository.byId(id);
    }
}
