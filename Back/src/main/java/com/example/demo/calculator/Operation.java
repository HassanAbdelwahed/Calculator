package com.example.demo.calculator;

import org.springframework.http.ResponseEntity;

public interface Operation {
    public String add(String number1, String number2);
    String subtract(String number1,String number2);
    String multiply(String number1,String number2);
    ResponseEntity<String> divide(String number1, String number2);
    ResponseEntity<String> mod(String number1, String number2);
    ResponseEntity<String> reverse(String number);
    ResponseEntity<String> power2(String number);
    ResponseEntity<String> root2(String number);
}
