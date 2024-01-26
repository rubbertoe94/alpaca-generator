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

  properties: {[name: string]: any} = {

    "accessories": [
      {name: "Default", value: "default"},
      {name: "Earrings", value: "earings"},
      {name: "Flower", value: "flower"},
      {name: "Glasses", value: "glasses"},
      {name: "Headphones", value: "headphone"}
      ],

    "background": [
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

    "ears": [
      {name: "Default", value: "default"},
      {name: "Tilted Backward", value: "tilt-backward"},
      {name: "Tilted Forward", value: "tilt-forward"}
    ],

    "eyes": [
      {name: "Default", value: "default"},
      {name: "Angry", value: "angry"},
      {name: "Naughty", value: "naughty"},
      {name: "Panda", value: "panda"},
      {name: "Smart", value: "smart"},
      {name: "Star", value: "star"},
    ],

    "hair": [
      {name: "Default", value: "default"},
      {name: "Bangs", value: "bang"},
      {name: "Curls", value: "curls"},
      {name: "Elegant", value: "elegant"},
      {name: "Fancy", value: "fancy"},
      {name: "Quiff", value: "quiff"},
      {name: "Short", value: "short"},
    ],

    "leg": [
      {name: "Default", value: "default"},
      {name: "Bubble-Tea", value: "bubble-tea"},
      {name: "Cookie", value: "cookie"},
      {name: "Game-Console", value: "game-console"},
      {name: "Tilt Backward", value: "tilt-backward"},
      {name: "Tilt Forward", value: "tilt-forward"},
    ],

    "mouth": [
      {name: "Default", value: "default"},
      {name: "Astonished", value: "astonished"},
      {name: "Eating", value: "eating"},
      {name: "Laughing", value: "laugh"},
      {name: "Tongue", value: "tongue"},
    ],

    "neck": [
      {name: "Default", value: "default"},
      {name: "Bend Backward", value: "bend-backward"},
      {name: "Bend Forward", value: "bend-forward"},
      {name: "Thick", value: "thick"},
    ]

  };

  currentProperty: string = "hair";


  alpaca: any = {
    "accessories": "default",
    "background": "blue60",
    "ears": "default",
    "eyes": "default",
    "hair": "default",
    "leg": "default",
    "mouth": "default",
    "neck": "default",
  }
  


changeProperty(choice: string) {
this.currentProperty = choice;
  console.log("currentProperty: ", this.currentProperty);
}

changeStyle(choice: string) {
  this.alpaca[this.currentProperty] = choice;
  console.log("currentStyle: ", this.alpaca[this.currentProperty])
}

downloadImage() {

}

}


// .selection-section {
//   flex: 1;
//   padding-left: 20px; 
// }

// /* Selection control styles */
// .radio-container {
//   margin: 10px;
//   text-align: center;
// }

// .radio h2 {
//   font-size: 24px;
//   margin-bottom: 10px;
// }

// .radio {
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   align-items: center;
// }

// input[type="radio"] {
//   display: none;
// }

// label {
//   display: block;
//   cursor: pointer;
//   font-size: 18px;
//   font-weight: bold;
//   border: 2px solid #c1d3ef;
//   border-radius: 30px;
//   color: #c1d3ef;
//   padding: 10px 20px;
//   text-align: center;
//   transition: all 0.3s ease;
// }

// label:hover {
//   border-color: #699cf5;
//   color: #699cf5;
// }


// .download-section {
//   margin-top: 20px;
// }

// button {
//   background-color: #23509c;
//   color: #fff;
//   border: none;
//   border-radius: 30px;
//   padding: 10px 20px;
//   font-size: 18px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
// }

// button:hover {
//   background-color: #699cf5;
// }
