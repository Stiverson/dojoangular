import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-mensagem',
    templateUrl: './mensagem.component.html',
    styleUrls: ['./mensagem.css']
  })

export class MensagemComponent {

    @Input() sucesso: boolean = false;

    constructor() {

    }

    ngOnInit(): void {


      }

}
