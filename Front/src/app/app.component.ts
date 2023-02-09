import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  constructor(private service: CalculatorService){}
  
  title = "Calculator";

  Input = "";
  result = "";
  flag = 1;
  flag2 = 0;
  symbol = "";
  existEqual = false;

  firstOperand = "";
  secondOperand = "";
  operator = "";


  nubmerClicked(num: String){
    
    if (this.existEqual || this.Input.trim() == this.result.trim()){
      this.clear();
    }
    
    if (this.result == '0'){
      this.result = '';
    }
    if (this.operator == ''){
      
      this.firstOperand += num;
      this.result += num
    }else{
      this.secondOperand += num;
      if(this.flag == 0){
        this.result = "";
        this.flag = 1;
      }
      this.result += num
      
    }
  }
  operationChosen(op: string, symbol: string){
   
    if (this.firstOperand == '' && symbol == '-'){
      this.firstOperand += symbol;
      this.result = "";
      this.result += symbol;
      return;
    }

    if (this.firstOperand == '' || this.firstOperand == '-'){
      return;
    }
    
    if (op == "reverse" ||op == "power2" ||op == "root2"){
      var temp = this.operator;
      this.operator = op;
      this.calculate(false, symbol);
      this.operator = temp;
      return;
    }

    this.symbol = symbol;
    if (this.operator != ""){
      this.calculate(false, symbol);
      this.operator = op;
      this.flag = 0;
      return;
    }

    this.Input = "";
    this.existEqual = false;
    this.Input += " " + this.firstOperand + " " + symbol + " ";
    this.operator = op;
    this.flag = 0;
    
  }

  decimalPoint(){
    if (this.operator == ''){
      this.firstOperand += '.';
    }else{
      this.secondOperand += '.';
    }
    this.result += '.';
  }

  clear(){
    this.result = "";
    this.Input = "";
    this.firstOperand = "";
    this.secondOperand = "";
    this.operator = "";
    this.existEqual = false;
    this.flag = 1;
    this.symbol = "";
  }

  undo(){
    if (this.Input.trim() == this.result){
      return;
    }

    if (this.existEqual){
      this.Input = "";
      this.existEqual = false;
    }else if (this.operator == ""){
      var x = this.result.slice(0, -1);
      if (x == ""){
        this.result = '';
        this.firstOperand = "";
      }else{
        this.result = x;
        this.firstOperand = x;
      }
    }else if (this.firstOperand != "" && this.secondOperand != ""){
      var x = this.result.slice(0, -1);
      if (x == ""){
        this.result = '';
        this.secondOperand = "";
      }else{
        this.result = x;
        this.secondOperand = x;
      }
    }
    else if (this.firstOperand != "" && this.secondOperand == ""){
      return;
    }
    
  }

  negative(){
    if (this.firstOperand != "" && this.secondOperand == ""){
      this.result = (Number(this.result) * -1).toString();
      this.firstOperand = this.result;
    }else if (this.firstOperand != "" && this.secondOperand != ""){
      this.result = (Number(this.result) * -1).toString();
      this.secondOperand = this.result;
    }
  }

  calculate(val: boolean, symbol:string){
    this.flag2 = 1; 
    if (this.firstOperand == ''){
      return;
    }
    if (this.operator == "reverse" || this.operator == "root2" || this.operator == "power2" ){
      this.service.getRes(this.operator, this.result).subscribe((data) =>{
        if (data == "Error"){
          this.ErrorOccured();
          return;
        }
        if (this.secondOperand == ""){
          this.Input = "";
          this.existEqual = false;
        }
        if (this.operator == ""){
          this.firstOperand = data;
        }else{
          this.secondOperand = data;
        }
        if (this.existEqual){
          this.Input = "";
          this.existEqual = false;
        }

        
        this.Input +=  " " + data;
        this.result = data;
      });
      return;
    }


    var second = "";
    if (val){
      this.existEqual = false;
      this.Input = "";
      this.Input += this.firstOperand + "  " + this.symbol + " " + this.secondOperand + " =";
      this.existEqual = true;
    }
    
    if(this.secondOperand == ""){
      this.Input = "";
      this.existEqual = false;
      this.Input = this.result + " " + symbol;
      return;
    }else{
      second = this.secondOperand;
    }


    this.service.getResult(this.operator, this.firstOperand, second).subscribe((data) => {
      if (data == "Error"){
        this.ErrorOccured();
        return;
      }
      this.firstOperand = data;
      this.secondOperand = "";
      this.result = data;
      
      if (!val){
        this.existEqual = false;
        this.Input = "";
        this.Input += " " + this.firstOperand + " " + symbol + " ";
      }
    });
        
  }
  enableButtons(){
    const collections = document.querySelectorAll('button');

    collections.forEach(collection => {
      collection.addEventListener('click', function(){
        const elements = document.getElementsByClassName('buttToDis');
        for (let i = 0; i < elements.length; i++) {
          elements[i].removeAttribute('disabled');
          elements[i].removeAttribute('style');
        }
      });
    });
    
  }

  ErrorOccured(){
    this.result = "Cannot divide by zero";
    const collection = document.getElementsByClassName('buttToDis');
    for (let i = 0; i < collection.length; i++) {
      collection[i].setAttribute('disabled', '');
      collection[i].setAttribute('style', 'color:red')
    }
    this.enableButtons()
  }




  

}
