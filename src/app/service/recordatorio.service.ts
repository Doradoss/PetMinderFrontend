import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recordatorio } from '../model/Recordatorio';
import { Observable } from 'rxjs';
import { RecordatorioDTO } from '../model/Recordatorio';

@Injectable({
  providedIn: 'root'
})
export class RecordatorioService {
  private apiURL = 'http://localhost:8081/api/user';

  constructor(private http: HttpClient) { }

  //Registrar Recordatorio
  registrarRecordatorio(recordatorio: Recordatorio):Observable<Recordatorio>{
    return this.http.post<Recordatorio>(`${this.apiURL}/registrar-recordatorio`, recordatorio);
  }

  // Obtener recordatorios por tipo de recordatorio
  obtenerRecordatoriosPorTipo(tipoRecordatorioId: number): Observable<Recordatorio[]> {
    let params = new HttpParams().set('tipoRecordatorioId', tipoRecordatorioId.toString());
    return this.http.get<Recordatorio[]>(`${this.apiURL}/recordatorio-tipo`, { params });
  }

  //ListarRecordatorioPorMascota
  listarRecordatorioPorMascota(mascotaId: number): Observable<Recordatorio[]> {
    let params = new HttpParams().set('mascotaId', mascotaId);
    //let params = new HttpParams().set('mascotaId', mascotaId.toString());
    return this.http.get<Recordatorio[]>(`${this.apiURL}/listar-recordatorio-por-mascota`, { params });
  }

  RecordatorioPorId(id: number): Observable<Recordatorio> {
    return this.http.get<RecordatorioDTO>(`${this.apiURL}/recordatorio/${id}`);
  }

}
