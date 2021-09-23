package com.allcodesnick.portfolio.repository;

import com.allcodesnick.portfolio.model.UserRoles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<UserRoles, Long> {
}
