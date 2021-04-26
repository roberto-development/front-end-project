import { Component, ViewChild } from '@angular/core';
import { MatDrawer, matDrawerAnimations, MatDrawerContainer } from '@angular/material/sidenav';
import { SharedService } from './services/shared.service';
import { LeftMenuComponent } from './shared/left-menu/left-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer') drawer: MatDrawer;
  title = 'networky';
  // view Child
  constructor(private sharedService: SharedService) {
    this.listenOnMenuToggle();
   }

   listenOnMenuToggle() {
     this.sharedService.subjectShared.subscribe(data => {
       if(data) {
        this.drawer.toggle();
      }
     })
   }

}
