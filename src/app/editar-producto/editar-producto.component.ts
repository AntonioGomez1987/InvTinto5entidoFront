import { Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-producto.component.html',
})
export class EditarProductoComponent {
  producto: Producto = new Producto();
  idProducto!: number;

  private productoServicio = inject(ProductoService);
  private ruta = inject(ActivatedRoute);
  private router = inject(Router);

  irAListaProductos() {
    this.router.navigate(['/producto-lista']);
  }

  ngOnInit() {
    this.idProducto = this.ruta.snapshot.params['id'];
    this.productoServicio.obtenerProductoPorid(this.idProducto).subscribe({
      next: (datos) => {
        this.producto = datos;
        console.log(datos);
      },
      error: (error) => {
        console.error("Error al obtener el producto", error);
      }
    });
  }

  onSubmit() {
    // Editar producto
    this.guardarProducto();
  }

  guardarProducto() {
    this.productoServicio.actualizarProducto(this.idProducto, this.producto).subscribe({
      next: (datos) => {
        console.log(datos);
        this.irAListaProductos();
      },
      error: (error) => {
        console.error("Error al actualizar el producto", error);
      }
    });
  }
}
