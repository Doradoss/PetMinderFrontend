import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MascotaService } from '../../../service/mascota.service';
import { Mascota } from '../../../model/Mascota';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-mascotas',
  templateUrl: './list-mascotas.component.html',
  styleUrls: ['./list-mascotas.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class ListMascotasComponent implements OnInit {
  mascotas: Mascota[] = [];
  displayedColumns: string[] = ['nombre', 'especie', 'edad', 'raza', 'propietario', 'opciones'];
  filteredMascotas = new MatTableDataSource<Mascota>(this.mascotas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private mascotaService: MascotaService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.mascotaService.getMascotas().subscribe(data => {
      this.mascotas = data;
      this.filteredMascotas.data = this.mascotas;
      this.filteredMascotas.paginator = this.paginator;
    });
  }

  deleteMascota(id: number): void {
    this.mascotaService.deleteMascota(id).subscribe(() => {
      this.mascotas = this.mascotas.filter(mascota => mascota.idMascota !== id);
      this.filteredMascotas.data = this.mascotas;
      this.snackBar.open('Mascota eliminada con éxito', 'Cerrar', {
        duration: 3000,
      });
    }, error => {
      this.snackBar.open('Error al eliminar la mascota', 'Cerrar', {
        duration: 3000,
      });
    });
  }

  editMascota(id: number): void {
    // Redirect to edit page with the ID of the pet
    // For now, you could navigate to an edit form
    console.log('Editar mascota', id);
  }
}
