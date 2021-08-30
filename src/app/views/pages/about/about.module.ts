import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AboutRoutingModule } from "./about-routing.module";

import { AboutComponent } from './about.component';
import { CookiesComponent } from './cookies/cookies.component';
import { ConfidentialityComponent } from './confidentiality/confidentiality.component';
import { CguComponent } from './cgu/cgu.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';



@NgModule({
  declarations: [
    AboutComponent,
    CookiesComponent,
    CguComponent,
    MentionsLegalesComponent,
    ConfidentialityComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
