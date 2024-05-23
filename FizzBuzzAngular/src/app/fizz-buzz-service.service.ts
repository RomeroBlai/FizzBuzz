import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {

  constructor(private http:HttpClient) {
   
   }
   getFizzBuzz(randNumber : number, maxNumber: number): Observable<any>{

    return this.http.get(`https://localhost:7037/fizzbuzz/${randNumber}/${maxNumber}`)
  }
}
