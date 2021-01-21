import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuicuneRoutingModule } from './suicune-routing.module';
import { SuicuneComponent } from './page/suicune.component';

@NgModule({
  declarations: [SuicuneComponent],
  imports: [CommonModule, SuicuneRoutingModule],
})
export class SuicuneModule {}
