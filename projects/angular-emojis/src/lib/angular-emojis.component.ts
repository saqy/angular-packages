import { Component, OnInit, Input } from '@angular/core';
import * as emojiData from './emoji.json';

@Component({
  selector: 'angular-emojis',
  template: `
    <span [ngStyle]="{'font-size': size + 'px'}" >
      {{emojiIcon}}
    </span>  
  `,
  styles: [
  ]
})
export class AngularEmojisComponent implements OnInit {
  @Input() name: string = 'smile';
  @Input() size: string ='30';
  emojiIcon: string; 

  constructor() { }

  ngOnInit(): void {
    this.emojiIcon = emojiData[this.name];
  }

}
