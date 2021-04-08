import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Image } from 'src/app/models/Image.model';
import { User } from 'src/app/models/User.model';
import { UserDTO } from 'src/app/models/UserDTO.model';
import { AuthenticationService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';
import { RightMenuComponent } from 'src/app/shared/right-menu/right-menu.component';
export let browserRefresh = false;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  // @ViewChild('rightmenu', { static: false })
  // rightMenuComponent: RightMenuComponent;

  user: UserDTO = null;

  userId: number;
  imageBase64: string;
  idImage: any;
  expression: true;
  // showRightMenu = false;

  // upload foto to db
  selectedFile: Image = new Image();

  constructor(
    private userService: UserService,
    private domSanitizer: DomSanitizer,
    private sharedServ: SharedService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.getAndSetUserInfo();
    // this.user = this.sharedServ.loggedInUser;

    this.prova();

    // const { id } = this.user;
    console.log(this.sharedServ.loggedInUser);
  }

  async getAndSetUserInfo() {
    const userInfo = await this.authenticationService.getUserInfo().toPromise();
    this.sharedServ.loggedInUser = userInfo;

    // utente salvato in shared
    console.log(this.sharedServ.loggedInUser);
    this.selectedFile.usersId = this.sharedServ.loggedInUser.id;
    this.user = userInfo;
    console.log(' ' + this.user);
  }

  onCheckToken() {
    return this.sharedServ.isLogged;
  }

  onFileChanged(event) {
    let selectedImage = event.target.files[0];

    let reader = new FileReader();
    const self = this;
    reader.onloadend = function (e) {
      console.log((reader.result as string).split(',')[1]);
      self.imageBase64 = (reader.result as string).split(',')[1];
    };
    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
      //
    }
  }

  onUpload() {
    const payload: Image = {
      // id: this.,
      id: this.idImage,
      usersId: this.selectedFile.usersId,
      img: this.imageBase64,
    };
    try {
      this.sharedServ.uploadPhoto(payload).toPromise();
      this.user.image = this.imageBase64;
    } catch {
      console.error('diofa');
    }
  }

  async prova() {
    console.log(this.user);

    const res = await this.sharedServ.getProfilePic().toPromise();

    // console.log('img profile: ' + res);
    this.user.image = res;
    const transformed = this.transform();
    return transformed;
  }

  transform() {
    return this.domSanitizer.bypassSecurityTrustHtml(this.user.image);
  }

  logout() {
    this.userService.logout();
  }

  getImageToDisplay() {
    return `data:image/png;base64,${this.user.image}`;
  }
}
