import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { RecursoComponent } from './recurso/recurso.component';
import { RecursoService } from './recurso.service';  

import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

import { HttpClientModule, HttpClient } from '@angular/common/http';  

import { MatButtonModule     } from '@angular/material/button'; 
import { MatMenuModule       } from '@angular/material/menu'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatIconModule       } from '@angular/material/icon'; 
import { MatCardModule       } from '@angular/material/card'; 
import { MatSidenavModule    } from '@angular/material/sidenav'; 
import { MatFormFieldModule  } from '@angular/material/form-field'; 
import { MatInputModule      } from '@angular/material/input'; 
import { MatTooltipModule    } from '@angular/material/tooltip'; 
import { MatToolbarModule    } from '@angular/material/toolbar'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle'


import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControleRecursoComponent } from './controlerecurso/controlerecurso.component';  
import { ControleRecursoService } from './controlerecurso.service';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component'



@NgModule({
  declarations: [
    AppComponent,
    RecursoComponent,
    ControleRecursoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    BrowserAnimationsModule,  
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,  
    RouterModule,
    MatListModule,
    AppRoutingModule,
    MatButtonToggleModule
  ],
  providers: [HttpClientModule, RecursoService, ControleRecursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
