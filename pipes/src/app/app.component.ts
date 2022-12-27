import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText: string = '';
  date: string = '';
  amount: number | undefined;
  miles: number | undefined;
  degrees: number | undefined;

  car = {
    make: 'Toyota',
    model: 'Supra',
    year: '1995'
  }

  onInput (event: any) {
    this.inputText = event.target.value; 
    console.log(this.inputText);
  }

  onDateInput (event: any ) {
    this.date = event.target.value;
    console.log(this.date);
  }

  onAmountChange(event: any ) {
    this.amount = parseFloat(event.target.value);
  }

  onMilesChange(event: any ) {
    this.miles = parseFloat(event.target.value);
  }

  onDegreesChange(event: any ) {
    this.degrees = parseFloat(event.target.value);
  }
}
