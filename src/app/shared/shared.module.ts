import { MensagemComponent } from './mensagem/mensagem.component';
import { RouterModule } from '@angular/router';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MenuLateralComponent,
    MensagemComponent
  ],
  exports: [
    MenuLateralComponent,
    MensagemComponent
  ]
})
export class SharedModule {

}
