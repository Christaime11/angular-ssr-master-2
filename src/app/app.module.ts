import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {SidebarComponent} from './views/components/sidebar/sidebar.component';
import {BaseComponent} from './views/components/base/base.component';
import {NotificationComponent} from './views/components/notification/notification.component';
import {HowToPlayComponent} from './views/components/how-to-play/how-to-play.component';
import {FelicitationsComponent} from './views/components/felicitations/felicitations.component';
import {MyLoaderComponent} from './views/components/my-loader/my-loader.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/pages/home/home.component';
import {NgParticlesModule} from "ng-particles";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyLoaderComponent,
    FelicitationsComponent,
    HowToPlayComponent,
    NotificationComponent,
    BaseComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
