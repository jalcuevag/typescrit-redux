// Acciones
export interface Action {
  type: string;
  payload?: any; //Parametros que se le pueden enviar a una acción
}

export interface Reducer<T> {
  (state: T, action: Action): T;
}
