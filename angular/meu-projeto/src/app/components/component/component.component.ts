import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrl: './component.component.css'
})
export class ComponentComponent {
  nome:string = "João marcos"
  idade:number = 27
  prof:string = "Desempregado"
  hobies = ["Comer",  "Jogar"]
  carro = {
    name: "Gol",
    ano: 2013
  }
}
