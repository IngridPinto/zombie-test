import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ControleRecurso } from '../../../app/controlerecurso';
import { ControleRecursoService } from '../../controlerecurso.service';
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
