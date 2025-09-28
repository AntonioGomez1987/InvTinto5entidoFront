import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from './proveedor';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private urlBase = "http://localhost:8080/inventarioTintoSentido-app/proveedores";

  constructor( private clienteHttp: HttpClient) { }

  obtenerProveedoresLista(): Observable<Proveedor[]> {
    return this.clienteHttp.get<Proveedor[]>(this.urlBase);
  }

}
