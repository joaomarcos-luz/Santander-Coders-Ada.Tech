import { Component } from '@angular/core';
import { Animal, Pessoa } from '../../animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  animais: Animal[] = []
  pessoas: Pessoa[] = []

  aniamlDeTalls = ""

  constructor (private listService: ListService) {
    this.getAnimais();
    this.getPessoas()
  }

  showAge(animal : Animal){
    this.aniamlDeTalls = `O pet ${animal.name} tem ${animal.age} amos!`
  }

  removerAnimal(animal: Animal){
    this.animais = this.animais.filter(a => animal.name !== a.name)
    this.listService.remove(animal.id).subscribe()
  }

  removePessoa(pessoa: Pessoa){
    this.pessoas = this.listService.removeP(this.pessoas, pessoa)
  }

  getAnimais(): void {
    this.listService.getAll().subscribe((animais) => (this.animais = animais))
  }

  getPessoas(): void {
    this.listService.getAl().subscribe((pessoas) => (this.pessoas = pessoas))
}

}