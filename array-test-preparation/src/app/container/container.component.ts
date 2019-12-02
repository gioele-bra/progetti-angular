import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  names: string[];

  constructor() {
    this.names = ["Ruspa", "Gru", "Autocarro", "Betoniera", "Martello Pneumatico", "Muletto", "Escavatore", "Bobcat", "Pala meccanica", "Morto"]
  }

  ngOnInit() {
  }

}
