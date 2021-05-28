import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { DataModel } from "src/app/models/data.model";
import { PaisesModel } from "src/app/models/paises.model";
import { CountryModel } from "src/app/models/pocovid.country.model";
import { StateModel } from "src/app/models/pocovid.state.model";
import { UfModel } from "src/app/models/uf.model";
import { FormularioService } from "./formulario.service";


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.css']
})
export class FormularioComponent implements OnInit, OnChanges {

  constructor(private fb: FormBuilder, private formularioservice: FormularioService) { }
  
  paisesRecebidos: PaisesModel[] = [];
  pocovidState!: StateModel;
  pocovidCountry!: CountryModel;
  ufs: UfModel[] = [];
  paisNome: string = '';
  uf: string = '';
  foiSubmetido: boolean = false;

  tipoMensagem: boolean = false;


  searchForm = this.fb.group({
    //email: ['', [Validators.required, Validators.email]],
    paises: ['', Validators.required],
    uf: ['', Validators.required],
    // data: ['', Validators.required]
  });

  get email() { return this.searchForm.get('email'); }

  get prettyRes() {
    return JSON.stringify(this.searchForm.value, null, 2);
  }

  onSubmit() {
    this.foiSubmetido = true;
    this.tipoMensagem = !this.tipoMensagem;
  }

  ngOnInit(): void {
    this.formularioservice.getUfs().subscribe((response) => { this.ufs = response });
    this.formularioservice.getPaises().subscribe((response) => { this.paisesRecebidos = response });

  }
  ngOnChanges(): void {
    console.log(this.uf)
    console.log(this.paisNome)
  }

  selected(){
    console.log(this.paisNome)
    console.log(this.uf)
  }

  onclick(){
    this.formularioservice.getState('asdfasdf','2020-03-18',this.paisNome, this.uf )
    .subscribe((response:StateModel) => { 
      console.log(response)
      this.pocovidState = response;
      localStorage.setItem('ufSelecionado', JSON.stringify(response))  
     });
     this.formularioservice.getCountry('asdfasdf',this.paisNome, '2020-03-18')
     .subscribe((response:CountryModel)=>{
       this.pocovidCountry = response;
       localStorage.setItem('paisSelecionado', JSON.stringify(response))
     });
  }

  

}

