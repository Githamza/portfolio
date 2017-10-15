import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {MdSnackBarModule} from '@angular/material';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppComponent } from './app.component';
import { MenuAccueilComponent } from './menu-accueil/menu-accueil.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import { SlidePresentationComponent } from './slide-presentation/slide-presentation.component';
import { FormationComponent } from './formation/formation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ExperiencesComponent } from './experiences/experiences.component';
import {Competences1Component} from './competences1/competences1.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './services/contact.service';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { BoiteDialogueComponent } from './boite-dialogue/boite-dialogue.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuAccueilComponent,
    SlidePresentationComponent,
    FormationComponent,
    ExperiencesComponent,
    Competences1Component,
    ContactComponent,
    ProjectsComponent,
    BoiteDialogueComponent
  ],
  entryComponents: [BoiteDialogueComponent],

  imports: [
  RouterModule.forRoot([
  { path: "#presentation", component: SlidePresentationComponent},
  { path: "#formation", component: FormationComponent}

  ]),

  AngularSvgIconModule,
    BrowserModule,
     BrowserAnimationsModule,
     MaterialModule,
     FlexLayoutModule,
     Angular2FontawesomeModule,
     FormsModule,
ReactiveFormsModule,
HttpModule,
MdSnackBarModule
     ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
