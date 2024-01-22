import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alpaca-generator';

  constructor(){}

  properties: {[key: string]: any} = {

    "Accessories": [
      {name: "Earrings", value: "earings"},
      {name: "Flower", value: "flower"},
      {name: "Glasses", value: "glasses"},
      {name: "Headphones", value: "headphone"}
      ],

    "Backgrounds": [
      { name: 'Blue 50', value: 'blue50' },
      { name: 'Blue 60', value: 'blue60' },
      { name: 'Blue 70', value: 'blue70' },
      { name: 'Dark Blue 30', value: 'darkblue30' },
      { name: 'Dark Blue 50', value: 'darkblue50' },
      { name: 'Dark Blue 70', value: 'darkblue70' },
      { name: 'Green 50', value: 'green50' },
      { name: 'Green 60', value: 'green60' },
      { name: 'Green 70', value: 'green70' },
      { name: 'Grey 50', value: 'grey40' },
      { name: 'Grey 60', value: 'grey70' },
      { name: 'Grey 70', value: 'grey80' },
      { name: 'Red 50', value: 'red50' },
      { name: 'Red 60', value: 'red60' },
      { name: 'Red 70', value: 'red70' },
      { name: 'Yellow 50', value: 'yellow50' },
      { name: 'Yellow 60', value: 'yellow60' },
      { name: 'Yellow 70', value: 'yellow70' }
    ],

    "Ears": [
      {name: "Default", value: "default"},
      {name: "Tilted Backward", value: "tilt-backward"},
      {name: "Tilted Forward", value: "tilt-forward"}
    ],

    "Eyes": [
      {name: "Default", value: "default"},
      {name: "Angry", value: "angry"},
      {name: "Naughty", value: "naughty"},
      {name: "Panda", value: "panda"},
      {name: "Smart", value: "smart"},
      {name: "Star", value: "star"},
    ],

    "Hair": [
      {name: "Bangs", value: "bangs"},
      {name: "Curls", value: "curls"},
      {name: "Default", value: "default"},
      {name: "Elegant", value: "elegant"},
      {name: "Fancy", value: "fancy"},
      {name: "Quiff", value: "quiff"},
      {name: "Short", value: "short"},
    ],

    "Leg": [
      {name: "Default", value: "default"},
      {name: "Bubble-Tea", value: "bubble-tea"},
      {name: "Cookie", value: "cookie"},
      {name: "Game-Console", value: "game-console"},
      {name: "Tilt Backward", value: "tilt-backward"},
      {name: "Tilt Forward", value: "tilt-forward"},
    ],

    "Mouth": [
      {name: "Default", value: "default"},
      {name: "Astonished", value: "astonished"},
      {name: "Eating", value: "eating"},
      {name: "Laughing", value: "laugh"},
      {name: "Tongue", value: "tongue"},
    ],

    "Neck": [
      {name: "Default", value: "default"},
      {name: "Bend Backward", value: "bend-backward"},
      {name: "Bend Forward", value: "bend-forward"},
      {name: "Thick", value: "thick"},
    ]

  };
  
}
