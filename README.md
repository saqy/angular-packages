# angular-emojis
_adds emoji support for angular projects_

## Installation
To install `angular-emojis`, you need [node.js](http://nodejs.org/) and [npm](https://github.com/npm/npm#super-easy-install).

In your project directory, just run
```sh
npm install --save angular-emojis
```

## Usage
add package to NgModule imports:
```javascript
import { AngularEmojisModule } from 'angular-emojis';
 
@NgModule({
  imports: [ AngularEmojisModule ]
})
export class AppModule {
}
```
Add component to your page:
```javascript
  <angular-emojis> </angular-emojis>
```
### Preview
😄

### Examples with different Sizes
Black Lives Matter (I acknowledge that Black people have to fight for basic rights, against systemic racism, unequal opportunities and injustice across the 🌎.
I know this is wrong and I am 💔!)
```javascript
  <angular-emojis [name]="'black_heart'" size="50"> </angular-emojis>
  <angular-emojis [name]="'black_medium_square'" size="50"> </angular-emojis>
  <angular-emojis [name]="'waving_black_flag'" size="50"> </angular-emojis>
  <angular-emojis [name]="'thumbsup_3'" size="50"> </angular-emojis>
  <angular-emojis [name]="'thumbsup_2'" size="50"> </angular-emojis>
```
![node-emoji example](https://i.imgur.com/hJqYcVW.png)


Carona Care (Stay Safe and Healthy 🙂)
```javascript
  <angular-emojis [name]="'virus'" size="50"> </angular-emojis>
  <angular-emojis [name]="'mask'" size="50"> </angular-emojis>
  <angular-emojis [name]="'sneezing_face'" size="50"> </angular-emojis>
  <angular-emojis [name]="'gloves'" size="50"> </angular-emojis>
  <angular-emojis [name]="'soap'" size="50"> </angular-emojis>
```
![node-emoji example](https://i.imgur.com/ONDfEWs.png)

Reactions
```javascript
  <angular-emojis [name]="'thinking_face'" size="20"> </angular-emojis>
  <angular-emojis [name]="'face-with-tears-of-joy'" size="30"> </angular-emojis>
  <angular-emojis [name]="'wink'" size="40"> </angular-emojis>
  <angular-emojis [name]="'sunglasses'" size="50"> </angular-emojis>
  <angular-emojis [name]="'smiley'" size="60"> </angular-emojis>
```
![node-emoji example](https://i.imgur.com/HFTaR4J.png)
Food
```javascript
 <angular-emojis [name]="'taco'" size="20"> </angular-emojis>
  <angular-emojis [name]="'fries'" size="30"> </angular-emojis>
  <angular-emojis [name]="'burger'" size="40"> </angular-emojis>
  <angular-emojis [name]="'burrito'" size="50"> </angular-emojis>
  <angular-emojis [name]="'pizza'" size="60"> </angular-emojis>
```
![node-emoji example](https://i.imgur.com/U1cd4K0.png)

Bright Sky
```javascript
 <angular-emojis [name]="'sun_with_face'" size="30"> </angular-emojis>
  <angular-emojis [name]="'full_moon_with_face'" size="20"> </angular-emojis>
  <angular-emojis [name]="'first_quarter_moon_with_face'" size="40"> </angular-emojis>
  <angular-emojis [name]="'star'" size="50"> </angular-emojis>
  <angular-emojis [name]="'star2'" size="60"> </angular-emojis>
```
![node-emoji example](https://i.imgur.com/FmN7a1W.png)

Hand gestures
```javascript
 <angular-emojis [name]="'thumbsdown'" size="20"> </angular-emojis>
  <angular-emojis [name]="'wave'" size="30"> </angular-emojis>
  <angular-emojis [name]="'crossed_fingers'" size="40"> </angular-emojis>
  <angular-emojis [name]="'thumbsup'" size="50"> </angular-emojis>
  <angular-emojis [name]="'ok_hand'" size="60"> </angular-emojis>
```
![node-emoji example](https://i.imgur.com/qHRmLD8.png)

## Full list of emojis with name.
Emoji list come from js-emoji (Thanks guys!!). You can get a JSON file with all emoji here: https://raw.githubusercontent.com/saqy/reactjs-emojis/master/src/components/emoji.json

## License
MIT


