package com.allcodesnick.portfolio.controller;

import com.allcodesnick.portfolio.model.User;
import com.allcodesnick.portfolio.service.impl.UserDetailManager;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    private UserDetailManager userDetailManager;

    public LoginController(UserDetailManager userDetailManager) {
        this.userDetailManager = userDetailManager;
    }

    @PostMapping("/createUserAccount")
    public User createUserAccount(@RequestBody User user){
        return userDetailManager.createUserAccount(user);
    }

}
