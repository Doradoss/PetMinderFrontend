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
import { LoginComponent } from './app/component/login/login.component';

const routes: Route[] = [
  {path: 'mascota-list', component: ListMascotasComponent},
  {path: 'mascota-add', component: UpdtMascotasComponent},
  {path: 'mascota-edit/:id', component: UpdtMascotasComponent},
  {path: 'home', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule, RouterModule, MatToolbarModule, BrowserAnimationsModule)]
}).catch((err) => console.error(err));
