package com.allcodesnick.portfolio.service.impl;


import com.allcodesnick.portfolio.model.ServicesProvided;
import com.allcodesnick.portfolio.repository.ServicesProvidedRepository;
import com.allcodesnick.portfolio.service.ServicesProvidedServiceInterface;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicesProvidedServiceImpl implements ServicesProvidedServiceInterface {

    private ServicesProvidedRepository servicesProvidedRepository;

    public ServicesProvidedServiceImpl(ServicesProvidedRepository servicesProvidedRepository) {
        super();
        this.servicesProvidedRepository = servicesProvidedRepository;
    }

    @Override
    public void saveServiceProvided(ServicesProvided servicesProvided){
        servicesProvidedRepository.save(servicesProvided);
    }

    @Override
    public List<ServicesProvided> listServicesProvidedList(){
        return servicesProvidedRepository.findAll();
    }

    @Override
    public ServicesProvided getServiceProvidedByID(long id){
        return servicesProvidedRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteServiceProvided(long id){
        ServicesProvided servicesProvided = servicesProvidedRepository.findById(id).orElse(null);
        servicesProvidedRepository.delete(servicesProvided);

    }

    @Override
    public void updateServiceProvided(ServicesProvided servicesProvided,long id){
        ServicesProvided existingServiceProvided = servicesProvidedRepository.findById(id).orElse(null);
        existingServiceProvided.setServiceName(servicesProvided.getServiceName());
        existingServiceProvided.setServiceDescription(servicesProvided.getServiceDescription());
        existingServiceProvided.setServicePrice(servicesProvided.getServicePrice());
        existingServiceProvided.setExpectedDuration(servicesProvided.getExpectedDuration());
        servicesProvidedRepository.save(existingServiceProvided);
    }
}
