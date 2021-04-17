import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Recurso } from './recurso'; 

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class RecursoService {

  url = 'https://localhost:44374/api/Recurso';  

  constructor(private http: HttpClient) { }

  getAllRecursos(): Observable<Recurso[]> {  
    return this.http.get<Recurso[]>(this.url);  
  }
  getRecursoById(id: string): Observable<Recurso> {  
    const apiurl = `${this.url}/${id}`;
    return this.http.get<Recurso>(apiurl);  
  } 
  createRecurso(recurso: Recurso): Observable<Recurso> {  
    return this.http.post<Recurso>(this.url, recurso, httpOptions);  
  }  
  updateRecurso(id: string, recurso: Recurso): Observable<Recurso> {  
    const apiurl = `${this.url}/${id}`;
    return this.http.put<Recurso>(apiurl,recurso, httpOptions);  
  }  
  deleteRecursoById(id: string): Observable<number> {  
    const apiurl = `${this.url}/${id}`;
    return this.http.delete<number>(apiurl, httpOptions);  
  }  

}
