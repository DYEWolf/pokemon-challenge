import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorPageComponent,
  },
  {
    path: 'dragonite',
    loadChildren: () =>
      import('./modules/dragonite/dragonite.module').then(
        (module) => module.DragoniteModule
      ),
  },
  {
    path: 'suicune',
    loadChildren: () =>
      import('./modules/suicune/suicune.module').then(
        (module) => module.SuicuneModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
