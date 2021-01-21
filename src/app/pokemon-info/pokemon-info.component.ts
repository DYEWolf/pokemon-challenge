import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css'],
})
export class PokemonInfoComponent implements OnInit {
  @Input() pokemon;
  @Input() locations;
  constructor() {}

  ngOnInit(): void {}
}
