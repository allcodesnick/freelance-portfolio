package com.allcodesnick.portfolio.controller;

import com.allcodesnick.portfolio.model.ServicesProvided;
import com.allcodesnick.portfolio.service.ServicesProvidedServiceInterface;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ServicesProvidedController {

    private ServicesProvidedServiceInterface servicesProvidedServiceInterface;

    public ServicesProvidedController(ServicesProvidedServiceInterface servicesProvidedServiceInterface) {
        super();
        this.servicesProvidedServiceInterface = servicesProvidedServiceInterface;
    }

    @GetMapping("/services")
    public List<ServicesProvided> getServicesProvided(){
        return servicesProvidedServiceInterface.listServicesProvidedList();
    }


}
