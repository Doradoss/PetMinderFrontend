import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

//Para el componente de recordatorio
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
// Importa el componente aquí
import { CommonModule } from '@angular/common';
import { Mascota } from '../../model/Mascota';
import { MascotaService } from '../../service/mascota.service';
import { RecordatorioService } from '../../service/recordatorio.service';
import { Recordatorio } from '../../model/Recordatorio';
import { Observable } from 'rxjs';
//agregado

@Component({
  selector: 'app-recordatorio',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    //RouterOutlet,
    //ListaMascotaComponent,
    MatSidenavModule
  ],
  templateUrl: './recordatorio.component.html',
  styleUrl: './recordatorio.component.css'
})
export class RecordatorioComponent implements OnInit {
  day: string; // Fecha formateada
  // Lista de mascotas desde el backend
  selectedMascota: number = 0;//Mascota | null = null; // Mascota seleccionada
  recordatoriosActuales: Recordatorio[] = []; // Recordatorios de la mascota seleccionada
  data: Observable<Mascota[]> = new Observable<Mascota[]>();
  mascotas: Mascota[] = [];
  mascotaSeleccionada: Mascota | null = null; // Agrega esta propiedad a tu componente
  userId = 2; // Obtén el ID del usuario (puedes reemplazarlo por tu lógica de autenticación)


  constructor(
    private router: Router,
    private mascotaService: MascotaService,
    private recordatorioService: RecordatorioService

  ) {
    const date = new Date();
    const formatOptions: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    this.day = date.toLocaleDateString('es-ES', formatOptions);


  }

  cargarMascotas(userId: number): void {
    this.mascotaService.getTodasMascotas(userId).subscribe({
      next: (mascotas) => {
        this.mascotas = mascotas;
        console.log('Mascotas cargadas:', mascotas);
      },
      error: (err) => console.error('Error al cargar mascotas:', err),
    });
  }

  ngOnInit(): void {
    this.cargarMascotas(this.userId);
  }


  listarRecordatorios(id_mascota: number): void {
    this.recordatorioService.listarRecordatorioPorMascota(id_mascota).subscribe({
      next: (recordatorios) => {
        this.recordatoriosActuales = recordatorios;
        console.log('Recordatorios cargados:', recordatorios);
      },
      error: (err) => console.error('Error al cargar recordatorios:', err),
    });
  }

  seleccionarMascotaPorId(id: number): void {
    this.mascotaSeleccionada = this.mascotas.find((mascota) => mascota.id === id) || null;
    if (this.mascotaSeleccionada) {
      console.log('Mascota seleccionada:', this.mascotaSeleccionada);
    } else {
      console.log('No se encontró la mascota con el ID especificado');
    }
  }



  // cargarMascotas(userId: number): Mascota[] {
  //   this.mascotaService.getTodasMascotas(userId).subscribe({
  //     next: (mascotas) => {
  //       this.mascotas = mascotas.map((mascota: Mascota) => ({
  //         idMascota: mascota.idMascota, // Ajusta según el nombre real de la propiedad
  //         especie: mascota.especie,
  //         nombre: mascota.nombre,
  //         edad: mascota.edad,
  //         usuario_id: mascota.usuario_id,
  //         historialMedico: mascota.historialMedico
  //       }));
  //       console.log('Mascotas transformadas:', this.mascotas);
  //     },
  //     error: (err) => console.error('Error al cargar mascotas:', err),
  //   });
  //   return this.mascotas;
  // }

  /*cargarMascotas(userId: number): Mascota[] {
    this.mascotaService.getTodasMascotas(userId).subscribe({
      next: (mascotas) => {
        this.mascotas = mascotas;
        console.log('Mascotas cargadas:', mascotas);
      },
      error: (err) => console.error('Error al cargar mascotas:', err),
    });
    return this.mascotas;
  }*/

  // listarRecordatorios(idMascota: number): void {
  //   //this.selectedMascota = mascota.idMascota;
  //   this.recordatorioService.listarRecordatorioPorMascota(idMascota).subscribe({
  //     next: (recordatorios) => {
  //       this.recordatoriosActuales = recordatorios;
  //       console.log('Recordatorios cargados:', recordatorios);
  //     },
  //     error: (err) => console.error('Error al cargar recordatorios:', err),
  //   });
  // }

  //Aqui no CAMBIA

  eliminarRecordatorio(recordatorio: Recordatorio) {
    this.recordatoriosActuales = this.recordatoriosActuales.filter(r => r !== recordatorio);
  }

  navegarAgregarRecordatorio() {
    this.router.navigate(['recordatorio/recordatorio-add']);
  }

}
