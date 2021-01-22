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
  cardStatus;
  constructor() {}

  ngOnInit(): void {
    console.log('here');
    console.log(this.hideInfo);
    if (this.hideInfo === true) {
      this.cardStatus = 'Show';
    } else {
      this.cardStatus = 'Hide';
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
}
