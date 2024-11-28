import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/hospital_system/api/auth.php';

  constructor(private http: HttpClient) {}

  register(userData: any) {
    return this.http.post(`${this.apiUrl}?action=register`, userData);
  }

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}?action=login`, credentials);
  }
}

