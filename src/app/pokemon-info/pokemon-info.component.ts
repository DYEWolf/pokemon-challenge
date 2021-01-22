import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css'],
})
export class PokemonInfoComponent implements OnInit {
  @Input() pokemon;
  @Input() locations;
  @Input() hideInfo;
  constructor() {}

  ngOnInit(): void {}

  hideInformation(event) {
    this.hideInfo = !this.hideInfo;
    if (event.srcElement.innerText === 'Hide') {
      event.srcElement.innerText = 'Show';
    } else {
      event.srcElement.innerText = 'Hide';
    }
  }
}
