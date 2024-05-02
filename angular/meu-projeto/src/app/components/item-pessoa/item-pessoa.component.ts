import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pessoa } from '../../animal';
import { ListService } from '../../services/list.service';


@Component({
  selector: 'app-item-pessoa',
  templateUrl: './item-pessoa.component.html',
  styleUrl: './item-pessoa.component.css'
})
export class ItemPessoaComponent {
  pessoa?: Pessoa

  constructor( private listService: ListService, private route: ActivatedRoute ){
    this.getPessoa()
  }

  ngOnInit(): void {

  }

  getPessoa(){
    // Acessar o servece e pegar os dados no banco
    //Ele vai vir como string por isso o number
    const id = Number(this.route.snapshot.paramMap.get('id'))
    // Pegando o metodo getIten criado no listService
    this.listService.getIten(id).subscribe((pessoa) => (this.pessoa = pessoa))
  }

}
