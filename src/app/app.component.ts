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
  cal: number = 0;
  kcal: string = "This is how many calories you need in a day";
  wtstr: string = "";
  goal: string = "";

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
      if(this.goal == "lose"){
        this.cal = this.bmr - 500;
        this.kcal = "you need to have " + this.cal + " calories.";
      }
      else if(this.goal == "main"){
        this.kcal = "you need to have " + this.bmr + " calories.";
      }
      else{
        this.cal = this.bmr + 500;
        this.kcal = "you need to have " + this.cal + " calories.";
      }
      this.saveData('personal', this.wtstr)
    }
    else{
      this.wtstr += this.weight;
      this.tocm();
      this.tokg();
      this.femaleBMR();
      
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
