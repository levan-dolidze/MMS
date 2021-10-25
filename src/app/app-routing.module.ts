import { DistributorListComponent } from './distributor-list/distributor-list.component';
import { RegisterComponent } from './register/register.component';
import { DistrBonusComponent } from './distr-bonus/distr-bonus.component';
import { DistrSalesComponent } from './distr-sales/distr-sales.component';

import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'productRegistration',
    pathMatch: 'full'
  },
  {
    path: 'productRegistration',
    component: ProductRegistrationComponent
  },
  {
    path: 'distSales',
    component: DistrSalesComponent
  },
  {
    path: 'distBonus',
    component: DistrBonusComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'distributorList',
    component:DistributorListComponent
  },

  { path: 'Proute', loadChildren: () => import('./pregistracion/pregistracion.module').then(m => m.PregistracionModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
