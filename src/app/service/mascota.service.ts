import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from '../model/mascota';



@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token');
    return new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');
  }
 getMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(`${this.apiURL}/api/user/findall-mascota`, {
      headers: this.getHeaders(),
    });
  }

  getMascota(id: number): Observable<Mascota> {
    return this.http.get<Mascota>(`${this.apiURL}/api/user/mascota/${id}`, {
      headers: this.getHeaders(),
    });
  }

  addMascota(mascota: Mascota): Observable<Mascota> {
    return this.http.post<Mascota>(`${this.apiURL}/api/user/registrar-mascota`, mascota, {
      headers: this.getHeaders(),
    });
  }

  updateMascota(mascota: Mascota): Observable<Mascota> {
    return this.http.put<Mascota>(`${this.apiURL}/api/user/actualizar-mascota/${mascota.id}`, mascota, {
      headers: this.getHeaders(),
    });
  }

  deleteMascota(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/api/user/eliminar-mascota/${id}`, {
      headers: this.getHeaders(),
    });
  }
}