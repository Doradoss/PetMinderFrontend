import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoRecordatorio } from '../model/TipoRecordatorio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiporecordatorioService {
  private apiURL = 'http://localhost:8081/api/user';

  constructor(private http: HttpClient) {}

  // Obtener todos los tipos de recordatorio
  findAll(): Observable<TipoRecordatorio[]> {
    return this.http.get<TipoRecordatorio[]>(`${this.apiURL}/findall-tipo-recordatorio`);
  }
  // Obtener un tipo de recordatorio por ID
  findById(id: number): Observable<TipoRecordatorio> {
    return this.http.get<TipoRecordatorio>(`${this.apiURL}/tipo-recordatorio/${id}`);
  }
  // Registrar 
  create(tipoRecordatorio: TipoRecordatorio): Observable<TipoRecordatorio> {
    return this.http.post<TipoRecordatorio>(`${this.apiURL}/registrar-tipo-recordatorio`, tipoRecordatorio);
  }
  // Actualizar 
  update(id: number, tipoRecordatorio: TipoRecordatorio): Observable<TipoRecordatorio> {
    return this.http.put<TipoRecordatorio>(`${this.apiURL}/actualizar-tipo-recordatorio/${id}`, tipoRecordatorio);
  }
  // Eliminar 
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/eliminar-tipo-recordatorio/${id}`);
  }
}
