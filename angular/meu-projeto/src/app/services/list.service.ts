import { Injectable } from '@angular/core';
import { Animal, Pessoa } from '../animal';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListService {
  private apiUrlAnimais = 'http://localhost:3000/animais';
  private apiUrlPessoas = 'http://localhost:3000/pessoas';


  constructor(private http: HttpClient) { }

  remove(animais: Animal[], animal: Animal) {
    return animais.filter(a => animal.name !== a.name)
  }

  removeP(pessoas: Pessoa[], pessoa: Pessoa) {
    return pessoas.filter(p => pessoa.name !== p.name)
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrlAnimais);
  }

  getAl(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.apiUrlPessoas);
  }

}
