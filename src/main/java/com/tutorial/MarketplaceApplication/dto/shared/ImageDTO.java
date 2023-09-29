package com.tutorial.MarketplaceApplication.dto.shared;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ImageDTO {

    public int id;

    public String imageLink;
}
