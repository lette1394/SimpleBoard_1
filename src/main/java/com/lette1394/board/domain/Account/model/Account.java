package com.lette1394.board.domain.Account.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.springframework.util.Assert;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import com.lette1394.board.domain.User.model.User;

@Getter
@Entity(name = "account")
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Builder(builderClassName= "ByUserBuilder", builderMethodName = "byUser")
    public Account(final User user) {
        Assert.notNull(user, "user cannot be null");
        Assert.hasText(user.getFirstName(), "first name cannot be empty");
        this.user = user;
    }
}
