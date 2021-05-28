import { DojoComponent } from './dojo.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { ListcasesComponent } from 'src/app/views/dojo/listcases/listcases.component';

const routes: Routes = [
  {
    path: '',
    component: DojoComponent
  },
  {
    path:'/listcases',
    component: ListcasesComponent,
  }

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DojoRoutingModule {

}
