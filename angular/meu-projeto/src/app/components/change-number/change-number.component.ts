import { Component, Output, EventEmitter, OnInit  } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  constructor() {}

  ngOnInit(): void{}

  handleClick(){
    this.changeNumber.emit()
  }
}
