import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { TrasladosComponent } from './traslados/traslados.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { DetalleCuentaComponent } from './detalle-cuenta/detalle-cuenta.component';
import { ReporteIngresosComponent } from './reporte-ingresos/reporte-ingresos.component';

const routes: Routes = [
{ path: "", component: LoginComponent},
{ path: "Home", component: HomePageComponent},
{ path: "Egreso", component: EgresosComponent},
{ path: "Ingreso", component: IngresosComponent},
{ path: "Traslado", component: TrasladosComponent},
{ path: "CrearCuenta", component: CrearCuentaComponent},
{ path: "Perfil", component: PerfilComponent},
{ path: "EditarPerfil", component: EditarPerfilComponent},
{ path: "EditarContrasena", component: CambiarContrasenaComponent},
{ path: "Cuenta/:id", component: DetalleCuentaComponent},
{ path: "Cuenta/ReporteIngreso/:id", component: ReporteIngresosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
