import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ClassWorkComponent } from './class-work/class-work.component';
import { EmpRecordComponent } from './emp-record/emp-record.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgStyleCompComponent } from './ng-style-comp/ng-style-comp.component';
import { PractiseComponent } from './practise/practise.component';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'practise', component: PractiseComponent, pathMatch: 'full' },
  { path: 'child', component: ChildComponent, pathMatch: 'full' },
  { path: 'ngStyle', component: NgStyleCompComponent, pathMatch: 'full' },
  { path: 'empTable', component: EmpRecordComponent, pathMatch: 'full' },
  { path: 'classWork', component: ClassWorkComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
