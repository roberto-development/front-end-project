import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
})
export class LeftMenuComponent implements OnInit {
  constructor() {}
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;

  opened: boolean;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  ngOnInit(): void {}

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
