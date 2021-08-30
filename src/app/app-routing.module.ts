import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./views/pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    component: HomeComponent
  },
  {
    path: 'profil',
    loadChildren: () => import('./views/pages/profil/profil.module')
      .then(mod => mod.ProfilModule)
  },
  {
    path: 'play',
    loadChildren: () => import('./views/pages/play/play.module')
      .then(mod => mod.PlayModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
