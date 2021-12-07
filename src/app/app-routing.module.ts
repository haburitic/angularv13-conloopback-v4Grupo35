import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import { AuthGuard } from './helper/auth.guard';
import { EmpleadoComponent } from './empleado/empleado.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'empleado', component: EmpleadoComponent, canActivate:[AuthGuard] },
  { path:'register', component: RegisterComponent },
  { path:'login', component: LoginComponent },
  {path:'', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
