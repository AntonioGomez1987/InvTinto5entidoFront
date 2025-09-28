import { Component } from '@angular/core';
import { ProductoListaComponent } from '../producto-lista/producto-lista.component';
import { ClienteListaComponent } from '../cliente-lista/cliente-lista.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProductoListaComponent, ClienteListaComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private router: Router) {}

  irAListaProductos() {
    this.router.navigate(['/producto-lista']); 
  }

  irAListaClientes() {
    this.router.navigate(['/cliente-lista']);
  }

  irAListaProveedores() {
    this.router.navigate(['/proveedor-lista']);
  }
}
