import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent implements OnInit{
  show: boolean = false
  message: boolean = false

  constructor() {}

  ngOnInit(): void {}

  showMessage(): void {
    this.show = !this.show
  }

  helloWord(): void {
    this.message = !this.message
  }

}
