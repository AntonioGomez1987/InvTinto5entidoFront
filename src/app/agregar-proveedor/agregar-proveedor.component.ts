import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-proveedor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-proveedor.component.html',
})
export class AgregarProveedorComponent {

  proveedor: Proveedor = new Proveedor();

  private proveedorServicio = inject(ProveedorService);
  private enrutador = inject(Router);

  onSubmit() {
    this.guardarProveedor();
  }

  guardarProveedor() {
    this.proveedorServicio.agregarProveedor(this.proveedor).subscribe({
      next: (datos) => {
        console.log(datos);
        this.irListaProveedores();
      },
      error: (error: any) => console.log("Error al guardar los datos del nuevo Proveedor", error)
    })
  }

  irListaProveedores() {
    this.enrutador.navigate(['/proveedor-lista']);
  }
}
