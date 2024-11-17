import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Mascota } from '../../model/mascota';
import { MascotaService } from '../../service/mascota.service';

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

  //Se añadió esto para el desglose por especie de mascota
  mascotas: Mascota[] = [];
  mostrarMascotas = false;
  especiesUnicas: string[] = [];

  constructor(
    private mascotaService: MascotaService
  ) {}

  ngOnInit(): void {
    this.mascotaService.getMascotas().subscribe(data => {
      this.mascotas = data;
      this.obtenerEspeciesUnicas();
    });
  }
  //Se añadió esto para el desglose por especie de mascota



  mostrarMenu() {
    this.mostrarMascotas = true;
  }

  ocultarMenu() {
    this.mostrarMascotas = false;
  }


  //Se añadió esto para el desglose por especie de mascota
  // Método para contar mascotas por especie
  contarMascotasPorEspecie(especie: string): number {
    return this.mascotas.filter(mascota => mascota.especie === especie).length;
  }

  // Obtener las especies únicas
  obtenerEspeciesUnicas() {
    const especies = this.mascotas.map(mascota => mascota.especie);
    this.especiesUnicas = [...new Set(especies)]; // Eliminar duplicados
  }

  // Método para obtener el ícono de una especie
  obtenerIconoPorEspecie(especie: string): string {
    const iconosEspecies: { [key: string]: string } = {
      'Gato': '/img/gatito.png',
      'Perro': '/img/perro.png',
      'Hamster': '/img/hamster.png',
      'Ave': '/img/pajaro.png',
      'Conejo': '/img/conejo.png'
    };
    
    return iconosEspecies[especie] || '';  // Retorna la ruta correcta o un valor vacío si no se encuentra
  }

  //Se añadió esto para el desglose por especie de mascota
}
