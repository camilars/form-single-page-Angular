import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucessComponent } from './sucess.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'src/app/components/button/button.module';

const routes: Routes = [
  {
    path: '',
    component: SucessComponent,
  },
];

@NgModule({
  declarations: [SucessComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ButtonModule],
})
export class SucessModule {}
