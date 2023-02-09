import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { student } from 'src/app/student';


@Injectable({
    providedIn: 'root'
})
export class CalculatorService {


    private Url = "http://localhost:8080/";
    constructor(private http: HttpClient) {}
    
    public getResult(op: string, operand1: string, operand2: string){
        
        return this.http.get<string>(`${this.Url}${op}/${operand1}/${operand2}`, {responseType: 'text' as 'json'});
    }

    public getRes(op: string, operand1: string){
        
        return this.http.get<any>(`${this.Url}${op}/${operand1}`, {responseType: 'text' as 'json'});
    }
    public getRe(op: string, operand1: number){
        
        return this.http.get<any>(`${this.Url}${op}/${operand1}`)
    }

}