import { Component, OnInit } from '@angular/core';
import { Empleado } from '../Model/empleado';
import { EmpleadoService } from '../service/empleado.service';
import { MatDialog } from '@angular/material/dialog';
import {CrearEmpleadoComponent} from '../crear-empleado/crear-empleado.component';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

  constructor(private empleadoService:EmpleadoService,
  private dialog: MatDialog) { }

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

  crear():void{
    const dialogRef =this.dialog.open(CrearEmpleadoComponent);
    dialogRef.afterClosed().subscribe(result =>{
      console.log(result);
      this.consultarTodo();
    });

  }
  modificar(empleado:any) {

    const dialogRef = this.dialog.open(CrearEmpleadoComponent,
          {
            data: empleado
        }
      );
      }
}
