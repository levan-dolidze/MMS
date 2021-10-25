import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PregistracionRoutingModule } from './pregistracion-routing.module';
import { PregistracionComponent } from './pregistracion.component';

@NgModule({
  declarations: [
    PregistracionComponent
  ],
  imports: [
    CommonModule,
    PregistracionRoutingModule,

  ]
})
export class PregistracionModule { }
