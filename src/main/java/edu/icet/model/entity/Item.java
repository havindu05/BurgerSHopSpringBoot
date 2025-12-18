package edu.icet.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Item {

    @Id
    private String code;

    private String name;

    private String category;

    private double unitPrice;

    private int qtyOnHand;

}
