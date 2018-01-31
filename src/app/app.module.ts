import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ValuesComponent } from './values/values.component';
import { NavComponent } from './nav/nav.component';
import { ExperienceComponent } from './experience/experience.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExpComponent } from './exp/exp.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ValuesComponent,
    NavComponent,
    ExperienceComponent,
    WelcomeComponent,
    ExpComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
