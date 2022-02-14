import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  calculate(firstNum, secondNum){
    return firstNum + secondNum
  }
}
