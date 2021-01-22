import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pokemon;
  pokemonLocations;
  favoritesList;
  subscription: Subscription;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.subscription = this.pokemonService.currentFavorite.subscribe(
      (list) => {
        this.favoritesList = list;
      }
    );
  }

  onSearchPokemon(pokemon) {
    this.pokemonService.getPokemon(pokemon).subscribe((res) => {
      this.pokemon = res;
      this.pokemonService
        .getPokemonLocations(this.pokemon.id)
        .subscribe((res) => {
          this.pokemonLocations = res;
        });
    });
  }
}
