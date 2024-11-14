import { Component } from '@angular/core';
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
export class RecordatorioComponent {
  day: string;
  selectedMascota: string = ''; // Mascota seleccionada
  mascotas = [
    { nombre: 'Firulais', recordatorios: ['Paseo mañana', 'Cita veterinaria'] },
    { nombre: 'Puchi', recordatorios: ['Alimentación tarde', 'Revisión dental'] },
  ];
  recordatoriosActuales: string[] = []; // Recordatorios de la mascota seleccionada
  

  constructor(private router: Router) { 
    const date = new Date();
    const formatOptions: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    this.day = date.toLocaleDateString('es-ES', formatOptions);
  }

  seleccionarMascota(mascota: { nombre: string, recordatorios: string[] }) {
    this.selectedMascota = mascota.nombre;
    this.recordatoriosActuales = mascota.recordatorios;
  }

  eliminarRecordatorio(recordatorio: string) {
    this.recordatoriosActuales = this.recordatoriosActuales.filter(r => r !== recordatorio);
  }

  navegarAgregarRecordatorio() {
    this.router.navigate(['recordatorio/recordatorio-add']);
  }

}
