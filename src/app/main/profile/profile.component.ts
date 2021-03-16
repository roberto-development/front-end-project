import { ProviderAst } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Image } from 'src/app/models/Image.model';
import { User } from 'src/app/models/User.model';
import { UserDTO } from 'src/app/models/UserDTO.model';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';
export let browserRefresh = false;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: UserDTO = null;

  userAuth: boolean = false;

  //  es. fare una form per modifica dati
  //  posso dichiarare formgroup istanzi nell'init e prima di farlo faccio chiamata per retrieve dusers data
  //  prendo dati e li salvo localmente in currentUser di classe, faccio init form e dichiaro i controls che di dovranno essere e i valori
  //  this.currentUSer.name e così via
  //  se dinamico creo un metodo per fare tutto ciò

  userId: number;

  imageBase64: string;
  loadProfile: boolean;
  imagePath: string;
  retrieveResponse: any;
  base64Data: any;
  retrievedImage: any;
  stringBase64: any = '';
  stringDemo: string;
  stringData: 'data:image/png;base64,';

  imageUrl: any;
  receivedImageData: any;
  newBase64Data: any;
  convertedImage: any;

  idImage: any;
  base64Image: any;

  imageProfile: any;

  userTest: User;

  // upload foto to db
  selectedFile: Image = new Image();

  constructor(
    private userService: UserService,
    private domSanitizer: DomSanitizer,
    private sharedServ: SharedService
  ) {}

  ngOnInit() {
    this.findUser();
    this.user = this.sharedServ.loggedInUser;

    if (!this.user) {
      this.logout();
    }

    this.sharedServ.isLogged;

    this.prova();

    const { id } = this.user;

    this.userId = id;

    this.selectedFile.usersId = this.user.id;
  }

  async onRefresh() {
    const res = await this.sharedServ.getToken;
    if (res) {
      this.userTest = this.sharedServ.getCurrentUser.prototype;
    }
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

  test() {
    const res = localStorage.getItem('token');
    console.log(res);
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

    const res = await this.sharedServ.getProfilePic(this.user).toPromise();

    console.log(res);
    this.user.image = res;
    this.transform();
  }

  async transform() {
    return this.domSanitizer.bypassSecurityTrustHtml(this.user.image);
  }

  async findUser() {
    const res = await this.sharedServ.getCurrentUser;
  }

  logout() {
    this.userService.logout();
  }

  getImageToDisplay() {
    return `data:image/png;base64,${this.user.image}`;
  }
}
