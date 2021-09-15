package com.allcodesnick.portfolio.service;

import com.allcodesnick.portfolio.model.Document;

public interface DocumentServiceInterface {
    Document storeFile(Document document);

    Document getFile(long id);
}
