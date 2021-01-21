import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragoniteComponent } from './page/dragonite.component';

const routes: Routes = [{ path: '', component: DragoniteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DragoniteRoutingModule {}
