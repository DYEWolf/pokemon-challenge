import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuicuneComponent } from './page/suicune.component';

const routes: Routes = [{ path: '', component: SuicuneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuicuneRoutingModule {}
