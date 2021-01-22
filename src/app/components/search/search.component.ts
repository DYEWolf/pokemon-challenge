import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  pokemon;
  @Output() searchPokemon = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  search() {
    this.searchPokemon.emit(this.pokemon);
  }
}
