import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss'],
})
export class RightMenuComponent implements OnInit {
  showMenuInProfilePage = false;
  constructor() {}

  ngOnInit(): void {}

  /* Set the width of the side navigation to 250px */
  openNav() {
    function openNav() {
      document.getElementById('mySidenav').style.width = '250px';
    }
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    function closeNav() {
      document.getElementById('mySidenav').style.width = '0';
    }
  }
}
