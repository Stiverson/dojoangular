import { PaisesModel } from './../../models/paises.model';
import { HomeService } from './home.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  paises: PaisesModel[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {

    this.homeService.getPaises().subscribe( data => this.paises = data);

  }

}
