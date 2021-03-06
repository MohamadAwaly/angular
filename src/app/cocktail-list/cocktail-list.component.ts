import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375',
      description:
        'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.',
    },
    {
      name: 'cosmopolitan',
      img: 'https://www.hangoverweekends.co.uk/media/15500/californication-cocktail.jpg?width=408px&height=256px',
      description:
        'Californication as used by the Red Hot Chili Peppers means the mixing of different cultures. The cocktail reflects this with the various spirits used within the cocktail from all over the world. A mixture of run, vodka, tequila and gin finished with orange liqueur, lemon juice and orange juice to mask the various spirits used throughout. Strong and yet sweet. The cocktail is finished with either a slice of orange or a twisted peel of orange rind.',
    },
    {
      name: 'Pina Colada',
      img: 'https://www.hangoverweekends.co.uk/media/15501/pina_colada_cocktail.png?width=243&height=350',
      description:
        'The classic tropical cocktail, with a distinctive look and taste. More of a smoothie as opposed to an alcoholic beverage. The modest yet perfect blend of coconut milk, rum and pineapple juice has been a firm favourite throughout the years.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
