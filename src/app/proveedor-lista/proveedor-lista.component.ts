import { Component, inject } from '@angular/core';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedor-lista',
  standalone: true,
  imports: [],
  templateUrl: './proveedor-lista.component.html',
})
export class ProveedorListaComponent {

  proveedores!: Proveedor[];

  private proveedorServicio = inject(ProveedorService);
  private enrutador = inject(Router);
  
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

  editarProveedor(idProveedor: number){
    // Navegamos a la ruta de edición del proveedor
    this.enrutador.navigate(['editar-proveedor', idProveedor]);
  }
}