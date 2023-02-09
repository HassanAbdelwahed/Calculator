package com.example.demo.calculator;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Service
public class CalculatorService implements Operation{

    public String add(String number1, String number2){
        double result = Double.parseDouble(number1) + Double.parseDouble(number2);
        if (result % 1 == 0){
            return String.valueOf((long) result);
        }
        return String.valueOf(result);
    }

    public String subtract(String number1,String number2){
        double result = Double.parseDouble(number1) - Double.parseDouble(number2);
        if (result % 1 == 0){
            return String.valueOf((long) result);
        }
        return String.valueOf(result);
    }

    public String multiply(String number1,String number2){
        double result = Double.parseDouble(number1) * Double.parseDouble(number2);
        if (result % 1 == 0){
            return String.valueOf((long) result);
        }
        return String.valueOf(result);
    }

    public ResponseEntity<String> divide(String number1, String number2){

        if (Double.parseDouble(number2) == (double) 0){
            return ResponseEntity.ok("Error");
        }
        double result = Double.parseDouble(number1) / Double.parseDouble(number2);
        if (result % 1 == 0){
            return ResponseEntity.ok(String.valueOf((long) result));
        }
        return ResponseEntity.ok(String.valueOf(result));
    }

    public ResponseEntity<String> mod(String number1, String number2){

        if (Double.parseDouble(number2) == (double) 0){
            return ResponseEntity.ok("Error");
        }
        double result = Double.parseDouble(number1) % Double.parseDouble(number2);
        if (result % 1 == 0){
            return ResponseEntity.ok(String.valueOf((long) result));
        }
        return ResponseEntity.ok(String.valueOf(result));
    }

    public ResponseEntity<String> reverse(String number){

        if (Double.parseDouble(number) == (double) 0){
            return ResponseEntity.ok("Error");
        }
        double result = 1 / Double.parseDouble(number);
        if (result % 1 == 0){
            return ResponseEntity.ok(String.valueOf((long) result));
        }
        return ResponseEntity.ok(String.valueOf(result));
    }

    public ResponseEntity<String> power2(String number){
        double result = Math.pow(Double.parseDouble(number), 2);
        if (result % 1 == 0){
            return ResponseEntity.ok(String.valueOf((long) result));
        }
        return ResponseEntity.ok(String.valueOf(result));
    }
    public ResponseEntity<String> root2(String number){

        if (Double.parseDouble(number) < (double) 0){
            return ResponseEntity.ok("Error");
        }
        double result = Math.sqrt(Double.parseDouble(number));
        if (result % 1 == 0){
            return ResponseEntity.ok(String.valueOf((long) result));
        }
        return ResponseEntity.ok(String.valueOf(result));
    }
}
