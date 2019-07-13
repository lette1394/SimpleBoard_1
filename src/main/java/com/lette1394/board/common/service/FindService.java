package com.lette1394.board.common.service;

import java.util.Optional;

public interface FindService<T> {
    Optional<T> findById(long id);
    T getOne(long id);
}
