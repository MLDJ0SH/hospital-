import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hospital-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './hospital-form.component.html',
  styleUrls: ['./hospital-form.component.css']
})
export class HospitalFormComponent {
  hospitalForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.hospitalForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.hospitalForm.valid) {
      console.log('Hospital data:', this.hospitalForm.value);
    }
  }
}
