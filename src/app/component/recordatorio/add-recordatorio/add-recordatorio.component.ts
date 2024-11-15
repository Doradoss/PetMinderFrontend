import { Component, OnInit, Output } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { Router, RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TipoRecordatorio } from '../../../model/TipoRecordatorio';
import { RecordatorioService } from '../../../service/recordatorio.service';
import { TiporecordatorioService } from '../../../service/tiporecordatorio.service';
import { Recordatorio } from '../../../model/Recordatorio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-recordatorio',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,  //importado
    MatSelectModule,
    RouterOutlet,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  templateUrl: './add-recordatorio.component.html',
  styleUrl: './add-recordatorio.component.css'
})
export class AddRecordatorioComponent implements OnInit {

  title = 'Firulais';
  day: string;

  tiposRecordatorio: TipoRecordatorio[] = [];  // Variable para almacenar los tipos de recordatorio
  recordatorio: any = {
    id: 0,
    titulo: '',
    descripcion: '',
    fecha: new Date(),
    hora: '',
    completado: false,
    tipoRecordatorioId: null  // Este es el ID del tipo de recordatorio
  };

  constructor(
    private router: Router,
    private recordatorioService: RecordatorioService,
    private tipoRecordatorioService: TiporecordatorioService  // Inyectamos el servicio para los tipos de recordatorio
  ) {
    const date = new Date();
    const formatOptions: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    this.day = date.toLocaleDateString('es-ES', formatOptions);
  }

  ngOnInit(): void {
    // Cargar los tipos de recordatorio al inicializar el componente
    this.tipoRecordatorioService.findAll().subscribe((tipos) => {
      this.tiposRecordatorio = tipos;
    });
  }

  registrarRecordatorio() {
    console.log('Recordatorio a registrar:', this.recordatorio);
    this.recordatorioService.registrarRecordatorio(this.recordatorio).subscribe(
      response => {
        console.log('Recordatorio registrado exitosamente:', response);
      },
      error => {
        console.error('Error al registrar recordatorio:', error);
      }
    );
  }
  /*registrarRecordatorio(): void {
    console.log(this.recordatorio);
    // Asegúrate de que el recordatorio tenga los datos completos
    this.recordatorioService.registrarRecordatorio(this.recordatorio).subscribe((nuevoRecordatorio) => {
      console.log('Nuevo recordatorio registrado:', nuevoRecordatorio);
      // Navegar a otra página o mostrar un mensaje de éxito
      this.router.navigate(['/recordatorios']);
    });
  }*/

}


  

