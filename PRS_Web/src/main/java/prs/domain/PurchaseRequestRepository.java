package prs.domain;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface PurchaseRequestRepository extends CrudRepository<PurchaseRequest, Integer> {

	List<PurchaseRequest> findByUserIdNot(int userId);


}
