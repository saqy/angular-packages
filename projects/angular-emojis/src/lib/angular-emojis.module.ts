import { NgModule } from '@angular/core';
import { AngularEmojisComponent } from './angular-emojis.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AngularEmojisComponent],
  imports: [
    CommonModule
  ],
  exports: [AngularEmojisComponent]
})
export class AngularEmojisModule { }
