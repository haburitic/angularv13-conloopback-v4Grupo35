import { Component, OnInit } from '@angular/core';
import { Empleado } from '../Model/empleado';
import { EmpleadoService } from '../service/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

  constructor(private empleadoService:EmpleadoService) { }

  ngOnInit(): void {
    this.consultarTodo();
  }

  listaEmpleado:Empleado[]=[];

  consultarTodo(): void{
    this.empleadoService.consultarTodo().subscribe({
      next: (data:Empleado[])=>{
        this.listaEmpleado=data;
      },
      error: (error)=>{
        console.log(error);

      },
      complete: ()=>{
        console.log("complete ");

      }
    });
  }

  eliminar(id:any): void{
    this.empleadoService.eliminar(id).subscribe({
      next: (data)=>{
        console.log(data);
      },
      error: (error)=>{
        console.log(error);

      },
      complete: ()=>{
        console.log("complete ");
        this.consultarTodo();
      }
    });
  }

}
