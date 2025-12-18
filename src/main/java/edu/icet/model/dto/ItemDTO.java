package edu.icet.model.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ItemDTO {

    private String code;

    private String name;

    private String category;

    private double unitPrice;

    private int qtyOnHand;

}
