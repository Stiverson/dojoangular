import { PaisesModel } from './../../models/paises.model';
import { environment } from './../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getPaises(): Observable<PaisesModel[]> {
    return this.httpClient.get<PaisesModel[]>(`${environment.backUrl}/paises`);
  }

}
