import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';   
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ProveedorListaComponent } from './proveedor-lista/proveedor-lista.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';


export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'producto-lista', component: ProductoListaComponent },
    { path: 'agregar-producto', component: AgregarProductoComponent },
    { path: 'cliente-lista', component: ClienteListaComponent },
    { path: 'proveedor-lista', component: ProveedorListaComponent },
    { path: 'editar-producto/:id', component: EditarProductoComponent }
];


