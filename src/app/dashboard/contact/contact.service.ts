// contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:5000/api/contact/'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  addContact(contactData: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.apiUrl}/contact`, contactData);
  }
}
