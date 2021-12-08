import { Component, Inject, OnInit } from '@angular/core';
import { EmpleadoService } from '../service/empleado.service';
import { Empleado } from '../Model/empleado';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.scss']
})
export class CrearEmpleadoComponent implements OnInit {

  constructor(private empleadoService : EmpleadoService,
  private dialog:MatDialog,
  @Inject(MAT_DIALOG_DATA) public data: Empleado) { }

  empleado:Empleado=new Empleado();

  ngOnInit(): void {
    if(this.data){
      this.empleado=this.data;
    }
  }

  onSubmit():void {
    if(this.empleado._id!=null){
      this.modificar();

    }else{
      this.crear();
    }
  }

   crear(){
    this.empleadoService.crear(this.empleado).subscribe({
      next: (data)=>{
        console.log(data);
      },
      error: (error)=>{
        console.log(error);

      },
      complete: ()=>{
        console.log("complete ");
      }
    });
  }


  modificar(){

    this.empleadoService.modificar(this.empleado).subscribe({
      next:(data)=>{

      },
      error:(error)=>{

      },
      complete:()=>{
        this.dialog.closeAll();

      }
    });
  }
}
