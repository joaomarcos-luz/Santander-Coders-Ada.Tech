import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

import { Animal } from '../../animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-item-detall',
  templateUrl: './item-detall.component.html',
  styleUrl: './item-detall.component.css'
})
export class ItemDetallComponent {
  animal?: Animal

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal()
  }

  ngOninit(): void {
  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal))
  }

}
