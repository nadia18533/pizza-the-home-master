package pizzathehome.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pizzathehome.entity.ProductEntity;

import java.util.List;

public interface ProductsRepository extends JpaRepository<ProductEntity, Integer> {

    @Override
    List<ProductEntity> findAll();

}
