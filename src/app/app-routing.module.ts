import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./views/pages/home/home.component";
import {PlayComponent} from "./views/pages/play/play.component";

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
