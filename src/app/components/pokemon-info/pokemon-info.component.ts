import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css'],
})
export class PokemonInfoComponent implements OnInit, OnChanges {
  @Input() pokemon;
  @Input() locations;
  @Input() hideInfo;
  cardStatus;
  buttonFavorite = 'Add to Favorites';
  addedToFavorites;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.addedToFavorites = false;
    if (this.hideInfo === true) {
      this.cardStatus = 'Show';
    } else {
      this.cardStatus = 'Hide';
    }
  }

  ngOnChanges(changes) {
    if (changes.pokemon) {
      this.buttonFavorite = 'Add To Favorites';
      this.addedToFavorites = false;
    }
  }

  hideInformation() {
    this.hideInfo = !this.hideInfo;
    if (this.cardStatus == 'Hide') {
      this.cardStatus = 'Show';
    } else if (this.cardStatus == 'Show') {
      this.cardStatus = 'Hide';
    }
  }

  addTofavorite() {
    this.addedToFavorites = true;
    this.buttonFavorite = 'Added To Favorites';
    this.pokemonService.addPokemonFavorite(this.pokemon);
  }
}
