import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CountryModel } from 'src/app/models/pocovid.country.model';
import { StateModel } from 'src/app/models/pocovid.state.model';


@Component({
  selector: 'app-listcases',
  templateUrl: './listcases.component.html',
  styleUrls: ['./listcases.component.css']
})
export class ListcasesComponent implements OnInit, OnChanges {

  constructor() { 

  }
  ngOnChanges(): void {
  }

  state!: StateModel;
  country!: CountryModel;

  ngOnInit(): void {
    this.state = JSON.parse(localStorage.getItem('ufSelecionado') || '{}')  
    this.country = JSON.parse(localStorage.getItem('paisSelecionado') || '{}')   
  }


}
function reloadComponent() {
  throw new Error('Function not implemented.');
}

