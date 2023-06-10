package com.verifone.sim_card_api;

import org.springframework.stereotype.Repository;

@Repository
public interface SimCardsRepository 
  extends JpaRepository<SimCardId, Long> {
 
}