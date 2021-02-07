import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  // Propriedade responsável por receber os eventos.
  eventos: any;

  constructor(private http: HttpClient) { 
    
  }

  // Método executado antes do HTML ser montado.
  ngOnInit() {
    this.getEventos();
  }

  // Função responsável por recuperar os eventos, faz a chamado no nosso WebService.
  getEventos() {
    this.http.get('http://localhost:5000/api/values').subscribe(
      response => { this.eventos = response; },
      error => { console.log(error); }
    );
  };

}
