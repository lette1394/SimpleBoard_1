package com.lette1394.board.common.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.NotBlank;

import lombok.Getter;

@Getter
@Embeddable
public class Email {
    @NotBlank
    @javax.validation.constraints.Email
    @Column(name = "email", nullable = false)
    private String value;
}
