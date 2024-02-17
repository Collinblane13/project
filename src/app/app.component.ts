import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  weight: number = 0;
  fweight: number = 0;
  height: number = 0;
  fheight: number = 0;
  gender: string = "m";
  unitw: string = "lbs";
  unith: string = "in";
  age: number = 0;
  bmr: number = 0;

  OnChange(mrChange: MatRadioChange){
    if(this.unitw == "lbs"){
      this.tokg();
    }
    else{
      this.fweight = this.weight;
    }
    console.log(mrChange.value);
  }

  OnChange2(mrchange: MatRadioChange){
    if(this.unith == "in"){
      this.tocm();
    }
    else{
      this.fheight = this.height;
    }
    console.log(mrchange.value);
  }

  onClick(){
    if(this.gender == "m"){
      this.maleBMR();
    }
    else{
      this.femaleBMR();
    }
  }

  

  tocm(){
    this.fheight = Math.round(this.height * 2.5);
  }

  tokg(){
    this.fweight = Math.round(this.weight / 2.2);
  }
  maleBMR(){
    this.bmr = Math.round((10 * this.fweight) + (6.25 * this.fheight) - (5 * this.age) + 5);
  }

  femaleBMR(){
    this.bmr = Math.round((10 * this.fweight) + (6.25 * this.fheight) - (5 * this.age) - 161);
  }
}
