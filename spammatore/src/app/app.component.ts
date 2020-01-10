import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

articles = new Array<string>();

  onClick(text: HTMLInputElement, num: HTMLInputElement): boolean {
    let frase : string = text.value;
    let numero : number = Number(num.value);
    console.log(`Dati ricevuti ${frase} - ${numero}`);
    for (let i = 0; i < numero; i++) {
      this.articles.push(frase);
    }
    return false;
  }

  refresh(){
  }

}
