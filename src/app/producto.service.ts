import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';  

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlBase = "http://localhost:8080/inventarioTintoSentido-app/productos";

  constructor( private clienteHttp: HttpClient) { }

  obtenerProductosLista(): Observable<Producto[]> {
    return this.clienteHttp.get<Producto[]>(this.urlBase);
  }

  agregarProducto(producto: Producto): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, producto);
  }

  obtenerProductoPorid(idProducto: number){
    return this.clienteHttp.get<Producto>(`${this.urlBase}/${idProducto}`);
  }

  actualizarProducto(idproducto: number, producto: Producto){
    return this.clienteHttp.put(`${this.urlBase}/${idproducto}`, producto);
  }
}
