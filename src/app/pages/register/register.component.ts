import { Component, HostBinding, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      fullName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
      ]),
      phone: new FormControl(null, Validators.maxLength(11)),
      birthday: new FormControl(null, Validators.required),
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  get f() {
    return this.formRegister.controls;
  }

  register() {
    this.submitted = true;
    console.log(this.formRegister.valid);
    if (!this.formRegister.valid) {
      this.formRegister.get('fullName').markAsTouched();
      this.formRegister.get('email').markAsTouched();
      this.formRegister.get('password').markAsTouched();
      this.formRegister.get('phone').markAsTouched();
      this.formRegister.get('birthday').markAsTouched();
      this.formRegister.get('acceptTerms').markAsTouched();
    } else {
      this.router.navigate(['/sucess']);
    }
  }
}
