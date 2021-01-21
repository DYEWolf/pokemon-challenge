import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuicuneRoutingModule } from './suicune-routing.module';
import { SuicuneComponent } from './page/suicune.component';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  declarations: [SuicuneComponent],
  imports: [CommonModule, SuicuneRoutingModule, SharedModule],
})
export class SuicuneModule {}
