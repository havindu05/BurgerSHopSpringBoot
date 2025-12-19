package edu.icet.model.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ItemDTO {

    @NotBlank(message = "Code is required")
    private String code;

    @NotBlank(message = "ItemName is required")
    private String name;

    private String category;

    private double unitPrice;

    private int qtyOnHand;

}
