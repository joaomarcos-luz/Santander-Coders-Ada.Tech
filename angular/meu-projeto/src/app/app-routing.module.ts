import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentComponent } from './components/component/component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ItemDetallComponent } from './components/item-detall/item-detall.component';
import { ItemPessoaComponent } from './components/item-pessoa/item-pessoa.component';


const routes: Routes = [
  { path: '', component: ComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: "pipes", component: PipesComponent },
  { path: "list/:id", component: ItemDetallComponent },
  { path: "lista/:id", component: ItemPessoaComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}