import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaisesModel } from "src/app/models/paises.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { UfModel } from "src/app/models/uf.model";
import { EmailValidator } from "@angular/forms";
import { StateModel } from "src/app/models/pocovid.state.model";
import { DataModel } from "src/app/models/data.model";
import { CountryModel } from "src/app/models/pocovid.country.model";


@Injectable({ providedIn: 'root' })
export class FormularioService {
    constructor( private http: HttpClient){}

    getState(email: string, data: string, country: string, uf: string ): Observable <StateModel> {
        let params = new HttpParams();
        params = params.append('email', email);
        params = params.append('data', data);
        params = params.append('country', country);
        params = params.append('uf', uf);
        return this.http.get<StateModel>(`${environment.backPocovidUrl}/state`, {params});
    }

    getCountry(email: string, country: string, data: string  ): Observable <CountryModel> {
        let params = new HttpParams();
        params = params.append('email', email);
        params = params.append('country', country);
        params = params.append('data', data);
        return this.http.get<CountryModel>(`${environment.backPocovidUrl}/country`, {params});
    }

    getPaises():Observable<PaisesModel[]>{
        return this.http.get<PaisesModel[]>(`${environment.backUrl}/paises`);
    }

    getUfs():Observable<UfModel[]>{
        return this.http.get<UfModel[]>(`${environment.backUrl}/uf`);
    }



}
