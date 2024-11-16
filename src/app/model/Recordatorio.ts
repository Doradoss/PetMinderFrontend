import { Mascota } from "./Mascota";
import { TipoRecordatorio } from "./TipoRecordatorio";

export interface Recordatorio {
    titulo: string;
    descripcion: string;
    fecha: Date;
    time: Date;
}

export interface RecordatorioDTO{
    id: number;
    titulo: string;
    descripcion: string;
    fecha: Date;
    time: Date;
    mascota: Mascota;
    tipoRecordatorio: TipoRecordatorio;
}