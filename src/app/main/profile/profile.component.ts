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
  user: User;
  loadProfile: boolean;
  imagePath: string;
  retrieveResponse: any;
  base64Data: any;
  retrievedImage: any;
  stringBase64: any = '';
  stringDemo: string
  stringData: 'data:image/png;base64,';
  

  imageData: any;  
  base64Image: any;
  image:any;

  // upload foto to db
  selectedFile: Image;


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
        
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    let uploadImage = this.selectedFile;
    const res = this.authService.uploadPhoto(uploadImage);
  }

  async prova() {

    const res = await this.authService.getProfilePic(this.user).toPromise();
    // let decode = JSON.parse(JSON.stringify(res));
    console.log(res);
    // "data:image/png;base64,"+
    this.image = res;
    this.transform
  }

  async transform(){
    return this.domSanitizer.bypassSecurityTrustUrl(this.image);
}

// onLoadImage() {
//   this
// }

  // formatImage(img: any): any {
//     const reader = new FileReader();
// reader.onload = (e) => this.img = e.target.result;
// reader.readAsDataURL(new Blob([data]));
    // return 'data:image/png;base64,' + img;
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  // ngAfterViewInit($event) {
  //   this.child.onFormSubmit($event);
  // }

  // onFormSubmit(f: NgForm) {

  // }

  logout()  {
    this.userService.logout();
  }

  // redirectToAuth() {
  //   this.router.navigate(['auth'])
  // }
}
