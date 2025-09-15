import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';   
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'producto-lista', component: ProductoListaComponent },
    { path: 'cliente-lista', component: ClienteListaComponent },
];


