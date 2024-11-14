import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

import { LoginService } from '../../service/login.service';
import { JwtRequest } from '../../model/jwRequest';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatInputModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  username: string = '';
  password: string = '';
  mensaje: string = '';
  ngOnInit(): void {}
  onLogin() {
    let request = new JwtRequest();
    request.username = this.username;
    request.password = this.password;
  
    this.loginService.login(request).subscribe(
      (response: any) => {
        // Guarda el token en sessionStorage
        sessionStorage.setItem('token', response.token);
        this.snackBar.open('Login exitoso', 'Cerrar', { duration: 3000 });
        // Redirige a una página segura después de iniciar sesión, por ejemplo, al listado de mascotas
        this.router.navigate(['/mascota-list']);
      },
      error => {
        this.snackBar.open('Error en el login', 'Cerrar', { duration: 3000 });
      }
    );
  }
}