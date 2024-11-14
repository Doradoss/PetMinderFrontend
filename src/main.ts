import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Route, RouterModule } from '@angular/router';
import { ListMascotasComponent } from './app/component/mascotas/list-mascotas/list-mascotas.component';
import { UpdtMascotasComponent } from './app/component/mascotas/updt-mascotas/updt-mascotas.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RecordatorioComponent } from './app/component/recordatorio/recordatorio.component';
import { AddRecordatorioComponent } from './app/component/recordatorio/add-recordatorio/add-recordatorio.component';

const routes: Route[] = [
  {path: 'mascota-list', component: ListMascotasComponent},
  {path: 'mascota-add', component: UpdtMascotasComponent},
  {path: 'mascota-edit/:id', component: UpdtMascotasComponent},
  {path: '', redirectTo: '/mascota-list', pathMatch: 'full'},
  {path: 'recordatorio',component: RecordatorioComponent},
  {path: 'recordatorio/recordatorio-add', component:AddRecordatorioComponent}
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule, RouterModule, MatToolbarModule, BrowserAnimationsModule), provideAnimationsAsync()]
}).catch((err) => console.error(err));
