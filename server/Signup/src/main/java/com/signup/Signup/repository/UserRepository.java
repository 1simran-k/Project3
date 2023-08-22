package com.signup.Signup.repository;

import com.signup.Signup.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,String> {
}
