package prs.domain;

import org.springframework.data.repository.CrudRepository;

public interface StatusRepository extends CrudRepository<Status, Integer> {

	Status findStatusByDescription(String desc);
}
