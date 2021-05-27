import { Component, Input } from '@angular/core';
import { PaisesModel } from 'src/app/models/paises.model';


@Component({
    selector: 'app-dojo',
    templateUrl: './dojo.component.html',
    styleUrls: ['./dojo.css']
  })
export class DojoComponent{
  @Input() paises: PaisesModel[] = []
  onChange(){
    console.log(this.paises);
  }
}

