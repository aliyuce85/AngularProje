import { Component } from '@angular/core';
import { OrnekModel, UserInfoModel } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProje';
  abc:number = 0;
  isDisplay=false;
  model=new OrnekModel();

  getName(){
    return this.model.user;
  }
  buttonTiklandi(){

      this.abc = this.abc +1;
      this.title = this.abc+"";

  }
  getItems(){
    if(this.isDisplay){
      return this.model.userInfoList;

    }
    return this.model.userInfoList.filter(x=> x.action);
  }
  getItemsNo(){
    if(this.isDisplay){
      return this.model.userInfoList;

    }
    return this.model.userInfoList.filter(x=> !x.action);
  }
  addItem(value: any){

    if(value!=""){
        this.model.userInfoList.push(new UserInfoModel(value,false) );
    }  
  }






}
