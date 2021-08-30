import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {ProfilRoutingModule} from "./profil-routing.module";
import {HistoriqueComponent} from "./historique/historique.component";
import {MesInformationsComponent} from "./mes-informations/mes-informations.component";
import {ModifierInformationsComponent} from "./modifier-informations/modifier-informations.component";
import {MotDePasseComponent} from "./mot-de-passe/mot-de-passe.component";
import {DataTablesModule} from "angular-datatables";

@NgModule({
  declarations: [
    ProfilComponent,
    HistoriqueComponent,
    MesInformationsComponent,
    ModifierInformationsComponent,
    MotDePasseComponent,
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbModule
  ]
})
export class ProfilModule { }
