import { Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [],
  templateUrl: './producto-lista.component.html',
})
export class ProductoListaComponent {

  productos!: Producto[];

  // Injectamos el servicio
  private productoServicio = inject(ProductoService);
  private enrutador = inject(Router);

  // Cargamos los productos
  ngOnInit() {
    this.obtenerProductos();
  }

  private obtenerProductos(): void {
    this.productoServicio.obtenerProductosLista().subscribe({
      next: (datos) => {
        this.productos = datos;
        console.log(datos);
      },
      error: (error) => {
        console.error("Error al obtener los productos", error);
      }
    });
  }

  editarProducto(idProducto: number){
    this.enrutador.navigate(['editar-producto', idProducto]);
  }


}
