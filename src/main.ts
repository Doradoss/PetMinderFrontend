import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Route, RouterModule } from '@angular/router';
import { ListMascotasComponent } from './app/component/mascotas/list-mascotas/list-mascotas.component';
import { UpdtMascotasComponent } from './app/component/mascotas/updt-mascotas/updt-mascotas.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './app/component/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { authGuard } from './app/guard/auth.guard';
import { ListDietasComponent } from './app/component/dietas/list-dietas/list-dietas.component';
import { UpdtDietasComponent } from './app/component/dietas/updt-dietas/updt-dietas.component';

const routes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'mascota-list', canActivate: [authGuard], component: ListMascotasComponent },
  { path: 'mascota-add', canActivate: [authGuard], component: UpdtMascotasComponent },
  { path: 'mascota-edit/:id', canActivate: [authGuard], component: UpdtMascotasComponent },
  { path: 'dieta-list', component: ListDietasComponent },
  { path: 'dieta-add', component: UpdtDietasComponent },
  { path: 'dieta-edit/:id', component: UpdtDietasComponent}
]

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient((withInterceptors([]))),provideRouter(routes), importProvidersFrom(HttpClientModule, RouterModule, MatToolbarModule, BrowserAnimationsModule), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()]
}).catch((err) => console.error(err));
