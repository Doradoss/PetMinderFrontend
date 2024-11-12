export interface Mascota {
    idMascota: number;
    nombreMascota: string;
    especie: string;
    edad: number;
    usuario_id: number;  // Foreign key
    historialMedico: string;  // Example field for medical history
  }
  