package com.allcodesnick.portfolio.service;


import com.allcodesnick.portfolio.model.ServicesProvided;

import java.util.List;

public interface ServicesProvidedServiceInterface {

    ServicesProvided saveServiceProvided(ServicesProvided servicesProvided);

    List<ServicesProvided> listServicesProvidedList();

    ServicesProvided getServiceProvidedByID(long id);

    void deleteServiceProvided(long id);

    ServicesProvided updateServiceProvided(ServicesProvided servicesProvided,long id);
}
