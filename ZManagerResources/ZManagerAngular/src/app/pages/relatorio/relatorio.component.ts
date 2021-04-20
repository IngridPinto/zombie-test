import { Component, OnInit } from '@angular/core';
import { RecursoService } from '../../recurso.service';
import { ControleRecurso } from '../../../app/controlerecurso';
import { ControleRecursoService } from '../../controlerecurso.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})

export class RelatorioComponent implements OnInit {

  allControleRecursosSummary: Observable<ControleRecurso[]>;

  constructor(private controleRecursoService: ControleRecursoService) { }

  ngOnInit(): void {
    this.allControleRecursosSummary = this.controleRecursoService.getSummary();
  }

}
