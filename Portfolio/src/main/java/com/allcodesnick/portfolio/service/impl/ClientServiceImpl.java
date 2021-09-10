package com.allcodesnick.portfolio.service.impl;

import com.allcodesnick.portfolio.model.Client;
import com.allcodesnick.portfolio.repository.ClientRepository;
import com.allcodesnick.portfolio.service.ClientServiceInterface;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientServiceInterface {

    private ClientRepository clientRepository;

    public ClientServiceImpl(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }


    @Override
    public void saveClient(Client client) {
        clientRepository.save(client);
    }

    @Override
    public List<Client> listClients() {
        return clientRepository.findAll();
    }

    @Override
    public Client getClientById(long id) {
        return null;
    }

    @Override
    public void deleteClient(long id) {

    }

    @Override
    public Client updateClient(Client client, long id) {
        return null;
    }
}

