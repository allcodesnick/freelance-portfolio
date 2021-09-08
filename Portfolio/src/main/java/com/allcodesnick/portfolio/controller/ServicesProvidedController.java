package com.allcodesnick.portfolio.controller;

import com.allcodesnick.portfolio.service.ServicesProvidedServiceInterface;
import org.springframework.stereotype.Controller;

@Controller
public class ServicesProvidedController {

    private ServicesProvidedServiceInterface servicesProvidedServiceInterface;

    public ServicesProvidedController(ServicesProvidedServiceInterface servicesProvidedServiceInterface) {
        super();
        this.servicesProvidedServiceInterface = servicesProvidedServiceInterface;
    }

}
