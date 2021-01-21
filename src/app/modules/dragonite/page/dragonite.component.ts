import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-dragonite',
  templateUrl: './dragonite.component.html',
  styleUrls: ['./dragonite.component.css'],
})
export class DragoniteComponent implements OnInit {
  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    const pokemon = this.router.url.split('/')[1];
    this.pokemonService.getPokemon(pokemon).subscribe((res) => {
      console.log(res);
    });
  }
}
