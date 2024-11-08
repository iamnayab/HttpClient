import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl = 'https://api.jsonbin.io/v3/b';
  private apiKey = '$2a$10$SU5cpHjhH6/.S5nYi2yHt.LT4g2dTIU7XVsnvGNlmSbgv0BSw1grC'; // Replace with your actual API key

  constructor(private http: HttpClient) { }
  
  postUserData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Master-Key': this.apiKey
    });
    return this.http.post<any>(this.apiUrl, data, { headers });
  }
}
