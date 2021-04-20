import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recurso } from './recurso';
import { ControleRecurso } from './controlerecurso';

var httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

@Injectable({
  providedIn: 'root'
})

export class ControleRecursoService {

  url = 'https://localhost:44374/api/ControleRecurso';

  constructor(private http: HttpClient) { }

  getAllControleRecursos(): Observable<ControleRecurso[]> {
    return this.http.get<ControleRecurso[]>(this.url);
  }
  getControleRecursoById(id: string): Observable<ControleRecurso> {
    const apiurl = `${this.url}/${id}`;
    return this.http.get<ControleRecurso>(apiurl);
  }

  createControleRecurso(controleRecurso: ControleRecurso): Observable<ControleRecurso> { 
    return this.http.post<ControleRecurso>(this.url, controleRecurso, httpOptions)
  }  
  updateControleRecurso(id: string, controlerecurso: ControleRecurso): Observable<ControleRecurso> {
    const apiurl = `${this.url}/${id}`;
    return this.http.put<ControleRecurso>(apiurl, controlerecurso, httpOptions);
  }
  deleteControleRecursoById(id: string): Observable<number> {
    const apiurl = `${this.url}/${id}`;
    return this.http.delete<number>(apiurl, httpOptions);
  }
  getSummary(): Observable<ControleRecurso[]> {  
    const apiurl = `${this.url}/relatorio`;
    return this.http.get<ControleRecurso[]>(apiurl);  
  } 
}
