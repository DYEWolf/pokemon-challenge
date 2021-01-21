import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  BASE_URL = 'https://pokeapi.co/api/v2/';

  constructor(public http: HttpClient) {}

  getPokemon(pokemon) {
    return this.http.get(`${this.BASE_URL}pokemon/${pokemon}`);
  }
}
