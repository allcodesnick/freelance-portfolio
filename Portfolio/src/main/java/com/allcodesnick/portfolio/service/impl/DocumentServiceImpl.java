package com.allcodesnick.portfolio.service.impl;

import com.allcodesnick.portfolio.model.Document;
import com.allcodesnick.portfolio.repository.DocumentsRepository;
import com.allcodesnick.portfolio.service.DocumentServiceInterface;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class DocumentServiceImpl implements DocumentServiceInterface {

    private DocumentsRepository documentsRepository;

    public DocumentServiceImpl(DocumentsRepository documentsRepository) {
        super();
        this.documentsRepository = documentsRepository;
    }

    @Override
    public Document saveFile(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Document document = new Document(fileName, file.getContentType(), file.getBytes());
        return documentsRepository.save(document);
    }

    @Override
    public Document getFile(long id) {
        return documentsRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteDocument(long id) {
        Document existingDocument = documentsRepository.findById(id).orElse(null);
        documentsRepository.delete(existingDocument);

    }


}
