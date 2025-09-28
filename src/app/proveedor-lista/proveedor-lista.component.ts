import { Component, inject } from '@angular/core';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-proveedor-lista',
  standalone: true,
  imports: [],
  templateUrl: './proveedor-lista.component.html',
})
export class ProveedorListaComponent {

  proveedores!: Proveedor[];

  private proveedorServicio = inject(ProveedorService);
  
  // Cargamos los proveedores 
  ngOnInit() {
    this.obtenerProveedores();
  }

  private obtenerProveedores(): void {
    this.proveedorServicio.obtenerProveedoresLista().subscribe({
        next: (datos) => {
          this.proveedores = datos;
          console.log(datos);
        },
        error: (error) => {
          console.error("Error al obtener los proveedores", error);
        }
      });
  }

  
}
