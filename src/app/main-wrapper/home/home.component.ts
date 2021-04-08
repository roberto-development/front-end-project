import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDTO } from 'src/app/models/UserDTO.model';
import { AuthenticationService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { LeftMenuComponent } from 'src/app/shared/left-menu/left-menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('leftmenu', { static: false })
  leftmenuComponent: LeftMenuComponent;

  // @ViewChild('rightmenu', { static: false })
  // rightMenuComponent: RightMenuComponent;

  userLogged: UserDTO = null;

  constructor(
    private authService: AuthenticationService,
    private sharedServ: SharedService
  ) {}

  ngOnInit() {
    this.getAndSetUserInfo();
  }

  async getAndSetUserInfo() {
    const userInfo = await this.authService.getUserInfo().toPromise();
    this.userLogged = userInfo;

    // utente salvato in shared

    // this.user = userInfo;
    console.log(this.userLogged);
  }
}
