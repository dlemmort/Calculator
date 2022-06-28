import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  firstAdditionNumber : number;
  secondAdditionNumber : number;
  additionResult : number;
  firstSubstractionNumber : number;
  secondSubstractionNumber : number;
  substractionResult : number;
  firstMultiplicationNumber : number;
  secondMultiplicationNumber : number;
  multiplicationResult : number;
  firstDivisionNumber : number;
  secondDivisionNumber : number;
  divisionResult : number;
  firstExponentiationNumber : number;
  secondExponentiationNumber : number;
  exponentiationResult : number;

  Addition() : number{
    return this.firstAdditionNumber + this.secondAdditionNumber;
  }

  Substraction() : number{
    return this.firstSubstractionNumber - this.secondSubstractionNumber;
  }

  Multiplication() : number{
    return this.firstMultiplicationNumber * this.secondMultiplicationNumber;
  }

  Division() : number{
    return this.firstDivisionNumber / this.secondDivisionNumber;
  }

  Exponentiation() : number{
    return Math.pow(this.firstExponentiationNumber,this.secondExponentiationNumber);
  }

  isNaN : Function = Number.isNaN;



}
