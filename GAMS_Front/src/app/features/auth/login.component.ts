import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true;
  router= inject(Router); 
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/)
      ]]
    });
  }

  onSubmit() {
    this.router.navigate(['/home']);
    if (this.loginForm.valid) {
      
      // TODO: Implement login logic
      console.log(this.loginForm.value);
    }
  }

  get password() {
    return this.loginForm.get('password');
  }
}
