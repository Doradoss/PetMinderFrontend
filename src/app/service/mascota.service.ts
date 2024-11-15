import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from '../model/Mascota';



@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private apiURL = 'http://localhost:8081/api/user';

  constructor(private http: HttpClient) {}

  getMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(`${this.apiURL}/findall-mascota`);
  }

  getMascota(id: number): Observable<Mascota> {  // trae la mascota por id de la mascota
    return this.http.get<Mascota>(`${this.apiURL}/mascota/${id}`);
  }

  addMascota(mascota: Mascota): Observable<Mascota> {
    return this.http.post<Mascota>(`${this.apiURL}/registrar-mascota`, mascota);
  }

  updateMascota(mascota: Mascota): Observable<Mascota> {
    return this.http.put<Mascota>(`${this.apiURL}/actualizar-mascota/${mascota.id}`, mascota);
  }

  deleteMascota(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/eliminar-mascota/${id}`);
  }

  getTodasMascotas(id:number) : Observable<Mascota[]> { //Trae todas las mascotas de un usuario
    return this.http.get<Mascota[]>(`${this.apiURL}/usuario/${id}`);
  }
}
