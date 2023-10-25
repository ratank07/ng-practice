import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationComponent } from './components/communication/communication.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TempDrivenFormComponent } from './components/temp-driven-form/temp-driven-form.component';
import { HttpComponent } from './components/http/http.component';
import { PeopleApiComponent } from './people-api/people-api.component';

const routes: Routes = [
  { path: 'communication', component: CommunicationComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'life-cycle', component: LifeCycleComponent },
  { path: 'pipe', component: PipesComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'template-form', component: TempDrivenFormComponent },
  { path: 'http', component: HttpComponent},
  {path: 'people-api', component: PeopleApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
