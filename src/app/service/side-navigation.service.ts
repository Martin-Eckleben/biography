import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavigationService {

  constructor() { }

  // boolean - false = closed / true = opened
  public drawerState:boolean = false

  public open(){
    this.drawerState=true
  }

  public close(){
    this.drawerState=false
  }
}
