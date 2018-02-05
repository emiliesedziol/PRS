package prs.domain;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer>{
	
	 User findByUserNameAndPassword(String userName, String password);


}
