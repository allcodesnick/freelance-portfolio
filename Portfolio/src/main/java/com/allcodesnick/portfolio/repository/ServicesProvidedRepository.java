package com.allcodesnick.portfolio.repository;

import com.allcodesnick.portfolio.model.ServicesProvided;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicesProvidedRepository extends JpaRepository<ServicesProvided, Long> {

}
