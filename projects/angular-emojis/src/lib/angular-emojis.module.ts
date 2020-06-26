import { NgModule } from '@angular/core';
import { AngularEmojisComponent } from './angular-emojis.component';
import { CommonModule } from '@angular/common';
export { AngularEmojisComponent }

@NgModule({
  declarations: [AngularEmojisComponent],
  imports: [
    CommonModule
  ],
  exports: [AngularEmojisComponent]
})
export class AngularEmojisModule { }
