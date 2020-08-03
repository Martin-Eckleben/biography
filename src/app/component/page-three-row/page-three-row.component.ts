import { Component, OnInit } from '@angular/core';
import { SideNavigationService } from '@service/side-navigation.service'

@Component({
  selector: 'app-page-three-row',
  templateUrl: './page-three-row.component.html',
  styleUrls: ['./page-three-row.component.less']
})
export class PageThreeRowComponent implements OnInit {

  constructor(
    public sideNavigationService: SideNavigationService
  ) {}

  public ngOnInit(): void {
  }
}