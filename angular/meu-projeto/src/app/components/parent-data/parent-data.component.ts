import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent {
  //pode iniciar de uma forma e depois reveber o valor.
  @Input() name: string = "";

  //pode iniciar com ! falando que vai chegar sua hora de iniciar.
  @Input() userData!: {email: string, role: string}
}

