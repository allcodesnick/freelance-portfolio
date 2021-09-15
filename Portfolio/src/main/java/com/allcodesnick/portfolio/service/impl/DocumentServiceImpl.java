package com.allcodesnick.portfolio.service.impl;

import com.allcodesnick.portfolio.model.Document;
import com.allcodesnick.portfolio.repository.DocumentsRepository;
import com.allcodesnick.portfolio.service.DocumentServiceInterface;
import org.springframework.stereotype.Service;

@Service
public class DocumentServiceImpl implements DocumentServiceInterface {

    private DocumentsRepository documentsRepository;

    public DocumentServiceImpl(DocumentsRepository documentsRepository) {
        super();
        this.documentsRepository = documentsRepository;
    }

    @Override
    public Document storeFile(Document document) {
        return null;
    }

    @Override
    public Document getFile(long id) {
        return null;
    }
}
