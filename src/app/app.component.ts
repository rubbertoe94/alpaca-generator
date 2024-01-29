import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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

  @ViewChild('myCanvas', { static: false }) myCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(private renderer: Renderer2) {}

  downloadImage() {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');
  
    if (canvas) {
      const context = canvas.getContext('2d');
    if (context) {

    
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    
    const background = new Image();
    background.src = `assets/backgrounds/${this.alpaca.background}.png`;
  
    const ears = new Image();
    ears.src = `assets/ears/${this.alpaca.ears}.png`;

    const accessories = new Image();
    accessories.src = `assets/accessories/${this.alpaca.accessories}.png`;

    const eyes = new Image();
    eyes.src = `assets/eyes/${this.alpaca.eyes}.png`;

    const hair = new Image();
    hair.src = `assets/hair/${this.alpaca.hair}.png`;

    const leg = new Image();
    leg.src = `assets/leg/${this.alpaca.leg}.png`;

    const mouth = new Image();
    mouth.src = `assets/mouth/${this.alpaca.mouth}.png`;

    const neck = new Image();
    neck.src = `assets/neck/${this.alpaca.neck}.png`;

    const nose = new Image();
    nose.src = `assets/nose.png`;
  
    
    const allImagesLoaded = () => {
      context.drawImage(background, 0, 0, canvas.width, canvas.height);
      context.drawImage(ears, 0, 0, canvas.width, canvas.height);
      context.drawImage(neck, 0, 0, canvas.width, canvas.height);
      context.drawImage(nose, 0, 0, canvas.width, canvas.height);
      context.drawImage(leg, 0, 0, canvas.width, canvas.height);
      context.drawImage(mouth, 0, 0, canvas.width, canvas.height);
      context.drawImage(hair, 0, 0, canvas.width, canvas.height);
      context.drawImage(accessories, 0, 0, canvas.width, canvas.height);
      context.drawImage(eyes, 0, 0, canvas.width, canvas.height);


   
      const dataURL = canvas.toDataURL('image/png');
  
      
      const a = this.renderer.createElement('a');
      a.href = dataURL;
      a.download = 'alpaca_image.png';
  
      
      this.renderer.appendChild(document.body, a);
      a.click();
      this.renderer.removeChild(document.body, a);
    };
  
    
    const imagesToLoad = [background, ears, eyes, hair, nose, accessories, leg, neck, mouth]; 
    let loadedCount = 0;
    imagesToLoad.forEach((image) => {
      image.onload = () => {
        loadedCount++;
        if (loadedCount === imagesToLoad.length) {
          allImagesLoaded();
        }
      };
    });
  }
}
  }
  

  title = 'alpaca-generator';



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
}

changeStyle(choice: string) {
  this.alpaca[this.currentProperty] = choice;
  console.log(this.alpaca)
}

randomize() {
  for (let property in this.alpaca) {
    let randomIndex = Math.floor(Math.random() * this.properties[property].length);
    this.alpaca[property] = this.properties[property][randomIndex].value;
  }
}
}