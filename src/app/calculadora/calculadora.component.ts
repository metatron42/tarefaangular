import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  operacao: string = '+';
  resultado: number | null = null;

  calcular() {
    switch (this.operacao) {
      case '+':
        this.resultado = this.numero1 + this.numero2;
        break;
      case '-':
        this.resultado = this.numero1 - this.numero2;
        break;
      case '*':
        this.resultado = this.numero1 * this.numero2;
        break;
      case '/':
        this.resultado = this.numero1 / this.numero2;
        break;
      default:
        this.resultado = null;
        break;
    }
  }
}
