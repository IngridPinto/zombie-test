import { Component, OnInit } from '@angular/core';
import { Recurso } from '../recurso';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { RecursoService } from '../recurso.service';
import { ControleRecurso } from '../controlerecurso';
import { ControleRecursoService } from '../controlerecurso.service';

@Component({
  selector: 'app-controlerecurso',
  templateUrl: './controlerecurso.component.html',
  styleUrls: ['./controlerecurso.component.css']
})
export class ControleRecursoComponent implements OnInit {

  dataSaved = false;
  controleRecursoForm: any;  
  
  idUpdate: any;
  message: any;

  allControleRecursos: Observable<ControleRecurso[]>;
  allRecursos: Observable<Recurso[]>;

  allControleRecursosSummary: Observable<ControleRecurso[]>;


  constructor(private formbulider: FormBuilder, private controleRecursoService: ControleRecursoService, private recursoService: RecursoService) { }

  ngOnInit() {
    this.controleRecursoForm = this.formbulider.group({
      Usuario: ['', [Validators.required]],
      Quantidade: ['', [Validators.required]],
      Recurso: ['', Validators.required],
    });

    this.loadAllControleRecursos();
    this.loadAllRecursos();
    
  }

  loadAllControleRecursos() {
    this.allControleRecursos = this.controleRecursoService.getAllControleRecursos();
  }

  loadAllRecursos() {
    this.allRecursos = this.recursoService.getAllRecursos();
  }

  loadAllControleRecursosSummary() {
    this.allControleRecursosSummary = this.controleRecursoService.getSummary();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const controleRecurso = this.controleRecursoForm.value;
    controleRecurso.Recurso = controleRecurso.Recurso[0];
    this.CreateControleRecurso(controleRecurso);
    this.controleRecursoForm.reset();
  }

  CreateControleRecurso(controleRecurso: ControleRecurso) {
    if (this.idUpdate == null) {
      this.controleRecursoService.createControleRecurso(controleRecurso).subscribe(
        () => {
          this.dataSaved = true;
          this.message = 'Registro salvo com sucesso';
          this.loadAllControleRecursos();
          this.idUpdate = null;
          this.controleRecursoForm.reset();
        }
      );
    } else {
      controleRecurso.id = this.idUpdate;
      this.controleRecursoService.updateControleRecurso(this.idUpdate, controleRecurso).subscribe(() => {
        this.dataSaved = true;
        this.message = 'Registro atualizado com sucesso';
        this.loadAllControleRecursos();
        this.idUpdate = null;
        this.controleRecursoForm.reset();
      });
    }
  }

  loadControleRecursoToEdit(id: string) {
    this.controleRecursoService.getControleRecursoById(id).subscribe(controleRecurso => {
      this.message = null;
      this.dataSaved = false;
      this.idUpdate = controleRecurso.id;
      this.controleRecursoForm.controls['Usuario'].setValue(controleRecurso.usuario);
      this.controleRecursoForm.controls['Quantidade'].setValue(controleRecurso.quantidade);
      this.controleRecursoForm.controls['Recurso'].setValue(controleRecurso.recurso);
    });
  }

  deleteControleRecurso(id: string) {
    if (confirm("Deseja realmente deletar este recurso ?")) {
      this.controleRecursoService.deleteControleRecursoById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = 'Registro deletado com sucesso';
        this.loadAllControleRecursos();
        this.idUpdate = null;
        this.controleRecursoForm.reset();
      });
    }
  }
  resetForm() {
    this.controleRecursoForm.reset();
    this.message = null;
    this.dataSaved = false;
  }

}
