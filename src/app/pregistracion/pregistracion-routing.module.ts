import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PregistracionComponent } from './pregistracion.component';

const routes: Routes = [
  { path: '', component: PregistracionComponent },
  { path: 'success', component: PregistracionComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PregistracionRoutingModule { }
