  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { TabsPage } from './tabs.page';

  const routes: Routes = [
    {
      path: '',
      component: TabsPage,
      children: [
        {
          path: 'tarefas',
          loadChildren: () => import('../tab1/tab1.module').then(m => m.TarefasPagePageModule)
        },
        {
          path: 'criarTarefas',
          loadChildren: () => import('../tab2/tab2.module').then(m => m.CriarTarefaPageModule)
        },
        {
          path: 'perfil',
          loadChildren: () => import('../tab3/tab3.module').then(m => m.PerfilPageModule)
        },
        {
          path: '',
          redirectTo: 'tarefas',
          pathMatch: 'full'
        }
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class TabsPageRoutingModule {}
