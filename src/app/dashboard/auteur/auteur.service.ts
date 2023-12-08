import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auteur } from './auteur';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {

  constructor(private httpClient: HttpClient) { }
  private apiURL = "http://localhost:5000/api/auteurs/";
  
    getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL )
    }
    
    create(auteur:Auteur): Observable<any> {
    
    return this.httpClient.post(this.apiURL ,auteur)
    }
    
    find(_id:object): Observable<any> {
    
    return this.httpClient.get(this.apiURL + _id)
    }
    
    update(_id:object, auteur:Auteur): Observable<any> {
    
    return this.httpClient.put(this.apiURL  + _id, auteur) 
    }
    
    delete(_id:object){
    return this.httpClient.delete(this.apiURL + _id)
    }
}
