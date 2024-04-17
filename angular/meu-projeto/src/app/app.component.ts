import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = "João";

  userData = {
    email: 'joao@gmail.com',
    role: 'admin',
}

  title = 'meu-projeto';
}
