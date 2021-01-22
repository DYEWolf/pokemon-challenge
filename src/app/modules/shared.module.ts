import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonInfoComponent } from '../components/pokemon-info/pokemon-info.component';

@NgModule({
  declarations: [PokemonInfoComponent],
  imports: [CommonModule],
  exports: [PokemonInfoComponent],
})
export class SharedModule {}
