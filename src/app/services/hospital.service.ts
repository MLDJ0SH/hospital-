import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private apiUrl = 'http://localhost/hospital_system/api/hospital.php';

  constructor(private http: HttpClient) {}

  getHospitals() {
    return this.http.get(this.apiUrl);
  }

  addHospital(hospitalData: any) {
    return this.http.post(this.apiUrl, hospitalData);
  }

  // Métodos para actualizar y eliminar hospitales.
}
