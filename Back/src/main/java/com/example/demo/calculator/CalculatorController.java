package com.example.demo.calculator;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CalculatorController {

    private final CalculatorService calculatorService;

    @Autowired
    public CalculatorController(CalculatorService calculatorService) {
        this.calculatorService = calculatorService;
    }

    @RequestMapping(path = "sum/{number1}/{number2}")
    public String add(@PathVariable String number1,@PathVariable String number2){
        return this.calculatorService.add(number1, number2);
    }

    @RequestMapping(path = "subtraction/{number1}/{number2}")
    public String subtract(@PathVariable String number1,@PathVariable String number2){
        return this.calculatorService.subtract(number1, number2);
    }

    @RequestMapping(path = "multiply/{number1}/{number2}")
    public String multiply(@PathVariable String number1,@PathVariable String number2){
        return this.calculatorService.multiply(number1, number2);
    }

    @RequestMapping(path = "division/{number1}/{number2}")
    public ResponseEntity<String> divide(@PathVariable String number1, @PathVariable String number2){
        return this.calculatorService.divide(number1, number2);
    }

    @RequestMapping(path = "module/{number1}/{number2}")
    public ResponseEntity<String> mod(@PathVariable String number1, @PathVariable String number2){
        return this.calculatorService.mod(number1, number2);
    }

    @RequestMapping(path = "reverse/{number}")
    public ResponseEntity<String> reverse(@PathVariable String number){
        return this.calculatorService.reverse(number);
    }

    @RequestMapping(path = "power2/{number}")
    public ResponseEntity<String> power2(@PathVariable String number){
        return this.calculatorService.power2(number);
    }

    @RequestMapping(path = "root2/{number}")
    public ResponseEntity<String> root2(@PathVariable String number){
        return this.calculatorService.root2(number);
    }

}
