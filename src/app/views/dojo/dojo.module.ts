import { FormularioComponent } from './formulario/formulario.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { DojoComponent } from './dojo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DojoRoutingModule } from './dojo-routing-module';
import { CommonModule } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ListcasesComponent } from 'src/app/views/dojo/listcases/listcases.component';

@NgModule({
  declarations: [
    DojoComponent,
    FormularioComponent,
    ListcasesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    DojoRoutingModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    DojoComponent
  ],
  providers: [],
  bootstrap: []
})
export class DojoModule { }
