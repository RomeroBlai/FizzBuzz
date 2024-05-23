import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FizzBuzzService } from './fizz-buzz-service.service';
import { Parser } from '@angular/compiler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
  fizzbuzz:string[] = []
  numero!:number
  maxNumber!: number

  constructor(private http: HttpClient, private fizzBuzzService:FizzBuzzService) {}

  getNumeroFizzBuzz(maxNumberString:string){
    this.numero = this.numRand();
    this.maxNumber =this.isNumber(maxNumberString);
    this.fizzBuzzService.getFizzBuzz(this.numero, this.maxNumber).subscribe({
      next:data =>{this.fizzbuzz = data;
      console.log(this.maxNumber)
      },
      error: error=> console.log(error.message)
    }    
    )
  }

  numRand():number{

    return Math.floor(Math.random()*100)+1
  }
  
  isNumber(maxNumberString: string): number {
    const num = parseFloat(maxNumberString);   
      return !isNaN(num) && String(num) === maxNumberString.trim() ? num : 0
  }
  
}
