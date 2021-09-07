package com.allcodesnick.portfolio.service;


import com.allcodesnick.portfolio.model.ServicesProvided;

import java.util.List;

public interface ServicesProvidedServiceInterface {

    void saveServiceProvided(ServicesProvided servicesProvided);

    List<ServicesProvided> listServicesProvidedList();

    ServicesProvided getServiceProvidedByID(long id);

    void deleteServiceProvided(long id);

    void updateServiceProvided(ServicesProvided servicesProvided,long id);
}
