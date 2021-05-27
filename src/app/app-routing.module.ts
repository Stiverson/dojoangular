import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcasesComponent } from './views/dojo/listcases/listcases.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'paises',
    loadChildren: () => import('./views/dojo/dojo.module').then(module => module.DojoModule)
  },
  {
    path: 'listcases',
    component: ListcasesComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
