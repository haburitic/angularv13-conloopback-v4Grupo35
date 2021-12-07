import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../Model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  consultarTodo(): Observable<any> {
    return this.http.get('empleados');
    }
  modificar(empleado: Empleado): Observable<any> {
    return this.http.put('empleados',JSON.stringify(empleado));
  }
  crear(empleado: Empleado): Observable<any> {
    return this.http.post('empleados', JSON.stringify(empleado));
  }

  eliminar(id: string): Observable<any> {
    return this.http.delete('empleados/'+id);
  }

}
