import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MascotaService } from '../../../service/mascota.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-updt-mascotas',
  templateUrl: './updt-mascotas.component.html',
  styleUrls: ['./updt-mascotas.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatButtonModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class UpdtMascotasComponent implements OnInit {
  mascotaForm: FormGroup;
  especies = ['Perro', 'Gato', 'Ave', 'Reptil'];
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private mascotaService: MascotaService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.mascotaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      especie: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.isEditing = !!id;

    if (this.isEditing && id) {
      this.mascotaService.getMascota(Number(id)).subscribe(mascota => {
        this.mascotaForm.patchValue(mascota);
      });
    }
  }

  onSubmit(): void {
    if (this.mascotaForm.valid) {
      if (this.isEditing) {
        this.mascotaService.updateMascota(this.mascotaForm.value).subscribe(() => {
          this.showSnackbar('Mascota actualizada exitosamente');
          this.router.navigate(['/mascota-list']);
        });
      } else {
        this.mascotaService.addMascota(this.mascotaForm.value).subscribe(() => {
          this.showSnackbar('Mascota registrada exitosamente');
          this.router.navigate(['/mascota-list']);
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/mascota-list']);
  }

  showSnackbar(message: string): void {
    this.snackBar.open(message, 'Cerrar', { duration: 3000 });
  }
}
