import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  public navigationItems: NavigationItem[] = this.menuStructureService.getMainMenu()

  public showFiller = false

  constructor(
    private menuStructureService: MenuStructureService,
    public userService: UserService, 
    public sideNavigationService: SideNavigationService
  ) {}

  public ngOnInit():void {

  }

  public logout(){
    this.sideNavigationService.close()
    this.userService.logout()
  }

}
