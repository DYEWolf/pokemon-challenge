import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragoniteRoutingModule } from './dragonite-routing.module';
import { DragoniteComponent } from './page/dragonite.component';

@NgModule({
  declarations: [DragoniteComponent],
  imports: [CommonModule, DragoniteRoutingModule],
})
export class DragoniteModule {}
