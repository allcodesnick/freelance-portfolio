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
    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public List<Client> listClients() {
        return clientRepository.findAll();
    }

    @Override
    public Client getClientById(long id) {
        return clientRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteClient(long id) {
        Client client = clientRepository.findById(id).orElse(null);
        clientRepository.delete(client);
    }

    @Override
    public Client updateClient(Client client, long id) {
        Client existingClient = clientRepository.findById(id).orElse(null);
        existingClient.setName(client.getName());
        existingClient.setEmail(client.getEmail());
        existingClient.setPhoneNumber(client.getPhoneNumber());
        return clientRepository.save(existingClient);
    }
}

