package com.allcodesnick.portfolio.controller;

import com.allcodesnick.portfolio.model.ServicesProvided;
import com.allcodesnick.portfolio.service.ServicesProvidedServiceInterface;
import org.springframework.web.bind.annotation.*;

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
    public List<ServicesProvided> getServicesProvidedList(){
        return servicesProvidedServiceInterface.listServicesProvided();
    }


    @PostMapping("/services")
    public ServicesProvided createServiceProvided(@RequestBody ServicesProvided servicesProvided){
        return servicesProvidedServiceInterface.saveServiceProvided(servicesProvided);
    }

}
