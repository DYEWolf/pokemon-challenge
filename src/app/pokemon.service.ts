import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  BASE_URL = 'https://pokeapi.co/api/v2/';

  favoritesSource: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  currentFavorite = this.favoritesSource.asObservable();

  constructor(public http: HttpClient) {}

  getPokemon(pokemon) {
    return this.http.get(`${this.BASE_URL}pokemon/${pokemon}`);
  }

  getPokemonLocations(id) {
    return this.http.get(`${this.BASE_URL}pokemon/${id}/encounters`);
  }

  updatePokemonFavorites(pokemon) {
    this.favoritesSource.next(pokemon);
  }

  addPokemonFavorite(pokemon) {
    const currentValue = this.favoritesSource.value;
    const updatedValue = [...currentValue, pokemon];
    this.favoritesSource.next(updatedValue);
  }
}
