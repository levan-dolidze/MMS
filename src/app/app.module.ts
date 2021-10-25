import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { DistrSalesComponent } from './distr-sales/distr-sales.component';
import { DistrBonusComponent } from './distr-bonus/distr-bonus.component';
import { RegisterComponent } from './register/register.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { FilterPipe } from './pipes/filter.pipe';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DistributorListComponent } from './distributor-list/distributor-list.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DatePipe } from '@angular/common';
import { DndDirective } from './dnd.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductRegistrationComponent,
    DistrSalesComponent,
    DistrBonusComponent,
    RegisterComponent,
    FilterPipe,
    FooterComponent,
    DistributorListComponent,
    DndDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatProgressBarModule
   

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
