import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { PaisesModel } from "src/app/models/paises.model";
import { UfModel } from "src/app/models/uf.model";
import { FormularioService } from "./formulario.service";


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.css']
})
export class FormularioComponent implements OnInit {

  constructor(private fb: FormBuilder, private formularioservice: FormularioService) { }
  @Input()  paisesRecebidos: PaisesModel[] = [];
  ufs: UfModel[] = [];
  foiSubmetido: boolean = false;

  tipoMensagem: boolean = false;


  searchForm = this.fb.group({
    //email: ['', [Validators.required, Validators.email]],
    paises: ['', Validators.required],
    uf: ['', Validators.required],
    //data: ['', Validators.required]
  });

  get email() { return this.searchForm.get('email'); }

  get prettyRes() {
    return JSON.stringify(this.searchForm.value, null, 2);
  }

  onSubmit() {
    this.foiSubmetido = true;
    this.tipoMensagem = !this.tipoMensagem;
    console.log(this.searchForm.value)
  }

  ngOnInit(): void {

    this.formularioservice.getPaises().subscribe((response) => { this.paisesRecebidos = response });
    this.formularioservice.getUfs().subscribe((response) => { this.ufs = response });

  }

}

