import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio.component';
import { LoginComponent } from '../../auth/components/login/login.component';



@NgModule({
  declarations: [
    InicioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InicioModule { }
