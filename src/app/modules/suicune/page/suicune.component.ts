import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-suicune',
  templateUrl: './suicune.component.html',
  styleUrls: ['./suicune.component.css'],
})
export class SuicuneComponent implements OnInit {
  pokemonData;
  pokemonLocations;

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    const pokemon = this.router.url.split('/')[1];
    this.pokemonService.getPokemon(pokemon).subscribe((res) => {
      console.log(res);
      this.pokemonData = res;
      this.pokemonService
        .getPokemonLocations(this.pokemonData.id)
        .subscribe((res) => {
          this.pokemonLocations = res;
          console.log(this.pokemonLocations);
        });
    });
  }
}
