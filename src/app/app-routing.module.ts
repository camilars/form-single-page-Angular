import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterModule } from './pages/register/register.module';
import { SucessComponent } from './pages/sucess/sucess.component';

const routes: Routes = [{ path: '', loadChildren: () => RegisterModule }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
