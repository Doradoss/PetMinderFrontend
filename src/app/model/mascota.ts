export interface Mascota {
  id: number;  //cambiar idMascota por id
  nombre: string;  //nombreMascota se cambio como nombre para que los datos del backend cargue
  especie: string;
  raza: number;
  edad: number;  // Foreign key
  // Example field for medical history
}

export interface MascotabyUser {

}