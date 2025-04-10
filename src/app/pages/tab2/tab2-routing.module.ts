import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarTarefaPage } from './tab2.page'; 

const routes: Routes = [
  {
    path: '',
    component: CriarTarefaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriarTarefaPageRoutingModule {}
