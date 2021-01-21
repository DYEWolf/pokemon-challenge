import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
