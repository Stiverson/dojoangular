import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { PaisesModel } from "src/app/models/paises.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { UfModel } from "src/app/models/uf.model";


@Injectable({ providedIn: 'root' })
export class FormularioService {
    constructor( private http: HttpClient){}

    getPaises(): Observable <PaisesModel[]> {
        return this.http.get<PaisesModel[]>(`${environment.backUrl}/paises`);
    }

    getUfs():Observable<UfModel[]>{
        return this.http.get<UfModel[]>(`${environment.backUrl}/uf`);
    }


}
