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
  lose: number = 0;
  gain: number = 0;
  losestr: string = "0";
  gainstr: string = "0";
  bmrstr: string = "0";
  wtstr: string = "";

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
      this.wtstr += this.weight;
      this.tocm();
      this.tokg();
      this.maleBMR();
      this.lose = this.bmr - 500;
      this.gain = this.bmr + 500;
      this.losestr = this.lose + " kcal";
      this.gainstr = this.gain + " kcal";
      this.bmrstr = this.bmr + " kcal";
      this.saveData('personal', this.wtstr)
    }
    else{
      this.wtstr += this.weight;
      this.tocm();
      this.tokg();
      this.femaleBMR();
      this.lose = this.bmr - 500;
      this.gain = this.bmr + 500;
      this.losestr = this.lose + " kcal";
      this.gainstr = this.gain + " kcal";
      this.bmrstr = this.bmr + " kcal";
      this.saveData('personal', this.wtstr)
    }
  }

  

  tocm(){
    if(this.unith == "in"){
      this.fheight = Math.round(this.height * 2.5);
    }
    else{
      this.fheight = this.height;
    }
  }

  tokg(){
    if(this.unitw == "lbs"){
      this.fweight = Math.round(this.weight / 2.2);
    }
    else{
      this.fweight = this.weight;
    }
  }
  maleBMR(){
    this.bmr = Math.round((10 * this.fweight) + (6.25 * this.fheight) - (5 * this.age) + 5);
  }

  femaleBMR(){
    this.bmr = Math.round((10 * this.fweight) + (6.25 * this.fheight) - (5 * this.age) - 161);
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
