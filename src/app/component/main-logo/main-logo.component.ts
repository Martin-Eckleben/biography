import { Component } from '@angular/core';
import { StateService } from '@uirouter/core'

@Component({
  selector: 'main-logo',
  templateUrl: './main-logo.component.html',
  styleUrls: ['./main-logo.component.less']
})
export class MainLogoComponent {

  constructor(
    private stateService: StateService
  ) {}

  public openHome() {
    this.stateService.go('bio.main.home')
  }

}
