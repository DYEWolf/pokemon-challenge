import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pokemon;
  pokemonLocations;
  constructor(private pokemonService: PokemonService) {}
  onSearchPokemon(pokemon) {
    this.pokemonService.getPokemon(pokemon).subscribe((res) => {
      console.log(res);
      this.pokemon = res;
      this.pokemonService
        .getPokemonLocations(this.pokemon.id)
        .subscribe((res) => {
          this.pokemonLocations = res;
        });
    });
  }
}
