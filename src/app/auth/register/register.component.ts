import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true, // Importante: Standalone habilitado
  imports: [
    MatFormFieldModule, // Módulo para usar mat-form-field
    MatInputModule, // Módulo para matInput
    MatButtonModule, // Módulo para botones
    ReactiveFormsModule, // Para formularios reactivos
    FormsModule, // Si usas formularios de plantilla
  ],
  styleUrls: ['./register.component.css'], // Opcional si tienes estilos personalizados
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Registration data', this.registerForm.value);
      // Lógica de registro aquí
    }
  }
}

