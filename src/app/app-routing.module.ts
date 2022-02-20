import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { ChildComponent } from './child/child.component';
import { ClassWorkComponent } from './class-work/class-work.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { EmpRecordComponent } from './emp-record/emp-record.component';
import { HomeComponent } from './home/home.component';
import { LoggerComponent } from './logger/logger.component';
import { LoginQueryComponent } from './login-query/login-query.component';
import { LoginComponent } from './login/login.component';
import { NgStyleCompComponent } from './ng-style-comp/ng-style-comp.component';
import { PipesComponent } from './pipes/pipes.component';
import { PractiseComponent } from './practise/practise.component';
import { ProductComponent } from './product/product.component';
import { TrainingComponent } from './training/training.component';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'practise', component: PractiseComponent, pathMatch: 'full' },
  { path: 'child', component: ChildComponent, pathMatch: 'full' },
  { path: 'ngStyle', component: NgStyleCompComponent, pathMatch: 'full' },
  { path: 'classWork', component: ClassWorkComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'pipes', component: PipesComponent, pathMatch: 'full' },
  {
    path: 'training',
    component: TrainingComponent,
    pathMatch: 'full',
    canActivate: [AuthService],
  },
  { path: 'logger', component: LoggerComponent, pathMatch: 'full' },
  { path: 'products', component: ProductComponent, pathMatch: 'full' },
  {
    path: 'customDirective',
    component: CustomDirectiveComponent,
    pathMatch: 'full',
  },
  { path: 'empTable/:login', component: EmpRecordComponent },
  { path: 'loginQuery', component: LoginQueryComponent },
  { path: 'empTable', component: EmpRecordComponent },
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerModule),
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
