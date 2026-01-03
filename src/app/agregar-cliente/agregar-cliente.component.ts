import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-cliente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-cliente.component.html',
})
export class AgregarClienteComponent {

  cliente: Cliente = new Cliente();

  private clienteServicio = inject(ClienteService);
  private enrutador = inject(Router);

  onSubmit() {
    this.guardarCliente();  
  }

  guardarCliente() {
    this.clienteServicio.agregarCliente(this.cliente).subscribe({
      next: (datos) => {
        console.log(datos);
        this.irListaClientes();
      },
      error: (error: any) => console.log("Error al guardar los datos del nuevo Cliente", error)
    })
  }

  irListaClientes() {
    this.enrutador.navigate(['/cliente-lista']);
  }

}
