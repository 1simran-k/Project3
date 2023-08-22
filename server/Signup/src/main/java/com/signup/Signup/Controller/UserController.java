package com.signup.Signup.Controller;

import com.signup.Signup.model.User;
import com.signup.Signup.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class UserController
{
    @Autowired
    private UserService userService;
    @RequestMapping(method = RequestMethod.GET,value = "/users")
    public List<User> getAllUsers()
    {
        return userService.getAllUsers();
    }
    @RequestMapping(method = RequestMethod.POST,value = "/users")
    public User createUser(@RequestBody User user)
    {
        return userService.createUser(user);
    }

}
