package edu.icet.model.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CustomerDTO {

    private String id;

    private String name;

    private String phone;

    private String nic;

    private String address;

}
