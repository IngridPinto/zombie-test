import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecursoComponent } from './recurso/recurso.component';
import { ControleRecursoComponent } from './controlerecurso/controlerecurso.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recurso', component: RecursoComponent },
  { path: 'controlerecurso', component: ControleRecursoComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}