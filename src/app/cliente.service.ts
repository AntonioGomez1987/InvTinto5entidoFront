import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';    
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlBase = "http://localhost:8080/inventarioTintoSentido-app/clientes";

  constructor( private clienteHttp: HttpClient ) { }

  obtenerClientesLista(): Observable<Cliente[]> {
    return this.clienteHttp.get<Cliente[]>(this.urlBase);
  }

}