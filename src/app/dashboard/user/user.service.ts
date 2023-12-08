import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  private apiURL = "http://localhost:5000/api/users/";

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL )
    }
    
    create(user:User): Observable<any> {
    
    return this.httpClient.post(this.apiURL ,user)
    }
    
    find(_id:object): Observable<any> {
    
    return this.httpClient.get(this.apiURL + _id)
    }
    
    update(_id:object, user:User): Observable<any> {
    
    return this.httpClient.put(this.apiURL  + _id, user)
    }
    
    delete(_id:object){
    return this.httpClient.delete(this.apiURL + _id)
    }
}
