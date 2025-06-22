import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:8000/api/send-verification'; // Cambia esto según tu endpoint

  constructor(private http: HttpClient) { }

  enviarEmail(email: string): Observable<any> {
    return this.http.post(this.apiUrl, { email });
  }
}
