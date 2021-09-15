package com.allcodesnick.portfolio.service.impl;

import com.allcodesnick.portfolio.model.Message;
import com.allcodesnick.portfolio.repository.MessageRepository;
import com.allcodesnick.portfolio.service.MessageServiceInterface;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageServiceImpl implements MessageServiceInterface {

    private MessageRepository messageRepository;

    public MessageServiceImpl(MessageRepository messageRepository) {
        super();
        this.messageRepository = messageRepository;
    }

    @Override
    public Message saveMessage(Message message){
        return messageRepository.save(message);
    }

    @Override
    public List<Message> listMessages(){
        return messageRepository.findAll();
    }

    @Override
    public Message getMessageById(long id){
        return messageRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteMessage(long id){
        Message message = messageRepository.findById(id).orElse(null);
        messageRepository.delete(message);
    }

    @Override
    public Message updateMessage(Message message, long id){
        Message existingMessage = messageRepository.findById(id).orElse(null);
        existingMessage.setMessage(message.getMessage());
        return messageRepository.save(existingMessage);
    }

}
