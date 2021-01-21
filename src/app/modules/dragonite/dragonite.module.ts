import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragoniteRoutingModule } from './dragonite-routing.module';
import { DragoniteComponent } from './page/dragonite.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [DragoniteComponent],
  imports: [CommonModule, DragoniteRoutingModule, SharedModule],
})
export class DragoniteModule {}
