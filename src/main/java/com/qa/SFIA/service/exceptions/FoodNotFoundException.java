package com.qa.SFIA.service.exceptions;

import javax.persistence.EntityNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Food does not exist in db!")
public class FoodNotFoundException extends EntityNotFoundException {

}
