
export interface Platos {
  id: number;
  nombre: string;
  precio: number;
  color: string;
  fecha: Date;
  inicio_actividad: Date;
  campos: string;
  oferta: number;
}



export interface Mensaje {
    msg: string;
}

export interface MensajeError {
  msg_error: string;
}
