import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasPage } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: TarefasPage,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasPageRoutingModule {}
