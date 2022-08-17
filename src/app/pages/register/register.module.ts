import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ButtonModule } from 'src/app/components/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SucessComponent } from '../sucess/sucess.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full',
    data: { title: 'Intern Sign Up' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Intern Sign Up' },
  },
  { path: 'sucess', component: SucessComponent, data: { title: 'Sucess!' } },
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RegisterComponent],
})
export class RegisterModule {}
