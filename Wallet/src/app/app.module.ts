import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { TrasladosComponent } from './traslados/traslados.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { EditarContrasenaComponent } from './editar-contrasena/editar-contrasena.component';
import { DetalleCuentaComponent } from './detalle-cuenta/detalle-cuenta.component';
import { ReporteIngresosComponent } from './reporte-ingresos/reporte-ingresos.component';
import { ReporteEgresosComponent } from './reporte-egresos/reporte-egresos.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { GraficaComponent } from './grafica/grafica.component'
import { ChartsModule } from 'ng2-charts/fesm5/ng2-charts';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    IngresosComponent,
    EgresosComponent,
    TrasladosComponent,
    PerfilComponent,
    EditarPerfilComponent,
    EditarContrasenaComponent,
    DetalleCuentaComponent,
    ReporteIngresosComponent,
    ReporteEgresosComponent,
    CrearCuentaComponent,
    CambiarContrasenaComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
