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
import { ReporteEgresosComponent } from './reporte-egresos/reporte-egresos.component';
import { RegisterComponent } from './register/register.component';
import { GraficaComponent } from './grafica/grafica.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
{ path: '', component: LoginComponent},
{ path: 'Home', component: HomePageComponent, canActivate: [AuthGuard]},
{ path: 'Egreso', component: EgresosComponent, canActivate: [AuthGuard]},
{ path: 'Ingreso', component: IngresosComponent, canActivate: [AuthGuard]},
{ path: 'Traslado', component: TrasladosComponent, canActivate: [AuthGuard]},
{ path: 'CrearCuenta', component: CrearCuentaComponent, canActivate: [AuthGuard]},
{ path: 'Perfil', component: PerfilComponent, canActivate: [AuthGuard]},
{ path: 'Perfil/EditarPerfil', component: EditarPerfilComponent, canActivate: [AuthGuard]},
{ path: 'Perfil/EditarPerfil/EditarContrasena', component: CambiarContrasenaComponent, canActivate: [AuthGuard]},
{ path: 'Cuenta/:id', component: DetalleCuentaComponent, canActivate: [AuthGuard]},
{ path: 'Cuenta/ReporteIngreso/:id', component: ReporteIngresosComponent, canActivate: [AuthGuard]},
{ path: 'Cuenta/ReporteEgreso/:id', component: ReporteEgresosComponent, canActivate: [AuthGuard]},
{ path: 'Registrar', component: RegisterComponent},
{ path: 'Cuenta/Grafica/:id', component: GraficaComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
