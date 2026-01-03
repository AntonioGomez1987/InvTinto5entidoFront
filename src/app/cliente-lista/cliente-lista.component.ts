import { Component, inject } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';


@Component({
  selector: 'app-cliente-lista',
  standalone: true,
  imports: [],
  templateUrl: './cliente-lista.component.html'
})
export class ClienteListaComponent {

  clientes!: Cliente[];

  //Injectamos el servicio
  private clienteServicio = inject(ClienteService);

  //Cargamos los clientes
  ngOnInit() {
    this.obtenerClientes();
  }

  private obtenerClientes(): void {
    this.clienteServicio.obtenerClientesLista().subscribe({
      next: (datos) => {
        this.clientes = datos;
        console.log(datos);
      },
      error: (error) => {
        console.error("Error al obtener los clientes", error);
      }
    });
  }
}
