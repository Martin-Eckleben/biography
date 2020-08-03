import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  public mobileObservable: BehaviorSubject<boolean> = new BehaviorSubject(null)

  public isMobile:boolean = false

  public checkMobile(){
    let viewportWidth = window.innerWidth
    if(viewportWidth<1280){
      this.isMobile = true
      this.mobileObservable.next(true)
    }
    else{
      this.isMobile = false
      this.mobileObservable.next(false)
    }
  }

  constructor() { }
}
