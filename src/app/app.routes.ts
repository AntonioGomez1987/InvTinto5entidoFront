import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';   
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ProveedorListaComponent } from './proveedor-lista/proveedor-lista.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { AgregarProveedorComponent } from './agregar-proveedor/agregar-proveedor.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';


export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'producto-lista', component: ProductoListaComponent },
    { path: 'agregar-producto', component: AgregarProductoComponent },
    { path: 'editar-producto/:id', component: EditarProductoComponent },
    { path: 'editar-proveedor/:id', component: EditarProveedorComponent },
    { path: 'cliente-lista', component: ClienteListaComponent },
    { path: 'proveedor-lista', component: ProveedorListaComponent },
    { path: 'agregar-proveedor', component: AgregarProveedorComponent },
    { path: 'agregar-cliente', component: AgregarClienteComponent }
];


