import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DietaService } from '../../../service/dieta.service';
import { Dieta } from '../../../model/dieta';
import { NavbarHomeComponent } from '../../navbar-home/navbar-home.component';

@Component({
  selector: 'app-list-dietas',
  templateUrl: './list-dietas.component.html',
  styleUrl: './list-dietas.component.css',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    RouterModule,
    NavbarHomeComponent
  ]
})
export class ListDietasComponent {
  dietas: Dieta[] = [];
  displayedColumns: string[] = ['nombre', 'indicaciones', 'fecha_creacion'];
  filteredDietas = new MatTableDataSource<Dieta>(this.dietas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dietaService: DietaService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dietaService.getDietas().subscribe(data => {
      this.dietas = data;
      this.filteredDietas.data = this.dietas;
      this.filteredDietas.paginator = this.paginator;
    });
  }

  deleteDieta(id: number): void {
    this.dietaService.deleteDieta(id).subscribe(() => {
      this.dietas = this.dietas.filter(dieta => dieta.id !== id);
      this.filteredDietas.data = this.dietas;
      this.snackBar.open('Dieta eliminada con éxito', 'Cerrar', {
        duration: 3000,
      });
    }, error => {
      this.snackBar.open('Error al eliminar la dieta', 'Cerrar', {
        duration: 3000,
      });
    });
  }

  editDieta(id: number): void {
    this.router.navigate(['/dieta-edit', id]);
  }
}
