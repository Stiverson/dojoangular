import { Component, Input, OnInit } from '@angular/core';
import { PaisesModel } from '../../../models/paises.model';

@Component({
  selector: 'app-listcases',
  templateUrl: './listcases.component.html',
  styleUrls: ['./listcases.component.css']
})
export class ListcasesComponent implements OnInit {

  constructor() { }

  @Input() paises: PaisesModel[] = [];

  ngOnInit(): void {
  }

}
