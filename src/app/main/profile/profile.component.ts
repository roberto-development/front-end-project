import { ProviderAst } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {  Router } from '@angular/router';
import { Image } from 'src/app/models/Image.model';
import { User } from 'src/app/models/User.model';
import { AuthenticationService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
export let browserRefresh = false;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User = null;

  userId: number;

  imageBase64: string;
  loadProfile: boolean;
  imagePath: string;
  retrieveResponse: any;
  base64Data: any;
  retrievedImage: any;
  stringBase64: any = '';
  stringDemo: string
  stringData: 'data:image/png;base64,';

  imageUrl: any;  
  receivedImageData: any;
  newBase64Data: any;
  convertedImage: any;

  idImage: any;
  base64Image: any;


  imageProfile:any;

  // upload foto to db
  selectedFile: Image = new Image;


  constructor(
    private userService: UserService , 
    private authService : AuthenticationService,
    private domSanitizer: DomSanitizer) {
     }

     ngOnInit() {
      this.user = this.authService.loggedInUser
      if(!this.user) {
        this.logout()
      }
      this.prova()
  
      const { id } = this.user;
  
      this.userId = id;
  
      console.log(this.user);
      
      this.selectedFile.usersId = this.user.id;
      console.log(this.selectedFile);
      
    }
  
    onFileChanged(event) {
      let selectedImage = event.target.files[0];
      
      let reader = new FileReader();
      const self = this;
      reader.onloadend = function(e) {
        console.log((reader.result as string).split(',')[1]);
        self.imageBase64 = (reader.result as string).split(',')[1];
      }
      if(selectedImage) {
      reader.readAsDataURL(selectedImage);
      // 
      }
    }
  
    onUpload() {
      const payload: Image = {
        // id: this.,
        id: this.idImage,
        usersId: this.selectedFile.usersId,
        img: this.imageBase64
      }
      try {
        this.authService.uploadPhoto(payload).toPromise();
        this.user.image = this.imageBase64;
      } catch {
        console.error('diofa');
        
      }
      // subscribe(res => {
      //   console.log(res)
      //   this.user.image = res;

        // this.transform()
        // console.log(this.user.image);
      // });
      // this.prova()
      // console.log(this.user.image);
      // this.transform()
    }
  
    async prova() {
  
      const res = await this.authService.getProfilePic(this.user).toPromise();

      // let reader = new FileReader();
      // console.log(res); // res => byte array
      // reader.onloadend = function(e) {
      //   console.log((reader.result as string).split(',')[1]);
      // }
      this.user.image = JSON.parse(res).img;
      this.idImage = JSON.parse(res).id;
      console.log(this.idImage);
      this.transform()
    }
  
    async transform(){
      return this.domSanitizer.bypassSecurityTrustUrl(this.user.image);
  }
  
    logout()  {
      this.userService.logout();
    }
  
    getImageToDisplay() {
      return `data:image/png;base64,${this.user.image}`;
    }
  }
  