import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './components/pipes/pipes.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { TempConversionPipe } from './pipe/temp-conversion.pipe';
import { CommunicationComponent } from './components/communication/communication.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { TempDrivenFormComponent } from './components/temp-driven-form/temp-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpComponent } from './components/http/http.component';
import {HttpClientModule} from '@angular/common/http';
import { PeopleApiComponent } from './people-api/people-api.component';
import { EmulatedComponent } from './components/emulated/emulated.component';
import { ShowDomEncapComponent } from './components/show-dom-encap/show-dom-encap.component';
import { NoneEncapComponent } from './components/none-encap/none-encap.component';
import { ObservableComponent } from './components/observable/observable.component';
import { StylingComponent } from './components/styling/styling.component'

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    PipesComponent,
    DirectiveComponent,
    TempConversionPipe,
    CommunicationComponent,
    LifeCycleComponent,
    TempDrivenFormComponent,
    ReactiveFormComponent,
    HttpComponent,
    PeopleApiComponent,
    EmulatedComponent,
    ShowDomEncapComponent,
    NoneEncapComponent,
    ObservableComponent,
    StylingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
