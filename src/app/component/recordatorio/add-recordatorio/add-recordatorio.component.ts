import { Component, Output } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { Router, RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-add-recordatorio',
  standalone: true,
  imports: [
    MatFormFieldModule,  //importado
    MatSelectModule,
    RouterOutlet,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './add-recordatorio.component.html',
  styleUrl: './add-recordatorio.component.css'
})
export class AddRecordatorioComponent {

  title = 'Firulais';
  day: string;

  constructor(private router: Router) {
    const date = new Date();
    const formatOptions: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    this.day = date.toLocaleDateString('es-ES', formatOptions);
  }

}
