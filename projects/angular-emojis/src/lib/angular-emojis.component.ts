import { Component, OnInit, Input } from '@angular/core';
import * as emojiData from './emoji.json';

@Component({
  selector: 'angular-emojis',
  template: `
    <span >
      {{emojiIcon}}
    </span>  
  `,
  styles: [
  ]
})
export class AngularEmojisComponent implements OnInit {
  @Input() name: string;
  @Input() size: string;
  emojiIcon: string; 


  constructor() { }

  ngOnInit(): void {
    console.log('name');
    console.log(this.name);
    console.log('size');
    console.log(this.size);
    this.emojiIcon = emojiData[this.name];
    console.log(this.emojiIcon);
  }

}
