import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specialite } from './specialite';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {

  constructor(private httpClient: HttpClient) { }
  private apiURL = "http://localhost:5000/api/specialites/";

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL )
    }
    
    create(specialite:Specialite): Observable<any> {
    
    return this.httpClient.post(this.apiURL ,specialite)
    }
    
    find(_id:object): Observable<any> {
    
    return this.httpClient.get(this.apiURL + _id)
    }
    
    update(_id:object, specialite:Specialite): Observable<any> {
    
    return this.httpClient.put(this.apiURL  + _id, specialite)
    }
    
    delete(_id:object){
    return this.httpClient.delete(this.apiURL + _id)
    }}
