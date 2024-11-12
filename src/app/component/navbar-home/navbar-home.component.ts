import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar-home',
  standalone: true,
  imports: [
    CommonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    RouterModule, 
    MatToolbarModule,
  ],
  templateUrl: './navbar-home.component.html',
  styleUrl: './navbar-home.component.css'
})
export class NavbarHomeComponent {

}
