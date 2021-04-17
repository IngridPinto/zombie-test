import { Component, OnInit } from '@angular/core';
import { Recurso } from '../recurso';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { RecursoService } from '../recurso.service';

@Component({
  selector: 'app-recurso',
  templateUrl: './recurso.component.html',
  styleUrls: ['./recurso.component.css']
})

export class RecursoComponent implements OnInit {

  dataSaved = false;  
  recursoForm: any;  
  allRecursos: Observable<Recurso[]>;  
  idUpdate : any;  
  message: any;  

  constructor(private formbulider: FormBuilder, private recursoService:RecursoService) { }
  ngOnInit() {
    this.recursoForm = this.formbulider.group({  
      Descricao: ['', [Validators.required]],  
      Quantidade: ['', [Validators.required]],  
      Observacao: ['', [Validators.required]],
    });  

    this.loadAllRecursos();
  }

  loadAllRecursos() {  
    this.allRecursos = this.recursoService.getAllRecursos();  
  } 

  onFormSubmit() {  
    this.dataSaved = false;  
    const recurso = this.recursoForm.value;  
    this.CreateRecurso(recurso);  
    this.recursoForm.reset();  
  } 

  CreateRecurso(recurso: Recurso) {  
    if (this.idUpdate == null) {  
      this.recursoService.createRecurso(recurso).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.message = 'Registro salvo com sucesso';  
          this.loadAllRecursos();  
          this.idUpdate = null;  
          this.recursoForm.reset();  
        }  
      );  
    } else {  
      recurso.id = this.idUpdate;  
      this.recursoService.updateRecurso(this.idUpdate,recurso).subscribe(() => {  
        this.dataSaved = true;  
        this.message = 'Registro atualizado com sucesso';  
        this.loadAllRecursos();  
        this.idUpdate = null;  
        this.recursoForm.reset();  
      });  
    }  
  }
  
  loadRecursoToEdit(id: string) {  
    this.recursoService.getRecursoById(id).subscribe(recurso=> {  
      this.message = null;  
      this.dataSaved = false;  
      this.idUpdate = recurso.id;  
      this.recursoForm.controls['Descricao'].setValue(recurso.descricao);  
      this.recursoForm.controls['Quantidade'].setValue(recurso.quantidade);  
      this.recursoForm.controls['Observacao'].setValue(recurso.observacao);  
    });    
  }  
  
  deleteRecurso(id: string) {  
    if (confirm("Deseja realmente deletar este recurso ?")) {   
      this.recursoService.deleteRecursoById(id).subscribe(() => {  
        this.dataSaved = true;  
        this.message = 'Registro deletado com sucesso';  
        this.loadAllRecursos();  
        this.idUpdate = null;  
        this.recursoForm.reset();  
      });  
    }  
  }  
  resetForm() {  
    this.recursoForm.reset();  
    this.message = null;  
    this.dataSaved = false;  
  } 

}
