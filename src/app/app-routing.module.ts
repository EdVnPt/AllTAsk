import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', // Caminho inicial
    redirectTo: 'login', // Redireciona para a tela de login
    pathMatch: 'full',
  },
  {
    path: 'login', // Rota para a página de login
    loadChildren: () =>
      import('./pages/Login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'cadastro', // Rota para a página de cadastro
    loadChildren: () =>
      import('./pages/Cadastro/cadastro.module').then((m) => m.CadastroPageModule),
  },
  {
    path: 'tabs', // Rota para o componente de abas
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'tarefas', // Exemplo de outras rotas (telas do app)
    loadChildren: () =>
      import('./pages/tab1/tab1.module').then(m => m.TarefasPagePageModule),
  },
  {
    path: 'criarTarefas', // Exemplo de outras rotas (telas do app)
    loadChildren: () =>
      import('./pages/tab2/tab2.module').then(m => m.CriarTarefaPageModule),
  },
  {
    path: 'perfil', // Exemplo de outras rotas (telas do app)
    loadChildren: () =>
      import('./pages/tab3/tab3.module').then((m) => m.PerfilPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}





/* import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 */