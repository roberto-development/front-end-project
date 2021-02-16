// import { HttpClient } from '@angular/common/http';
// import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
// import * as EventEmitter from 'events';
// import { AuthenticationService } from 'src/app/services/auth.service';

// @Component({
//   selector: 'app-upload-file',
//   templateUrl: './upload-file.component.html',
//   styleUrls: ['./upload-file.component.scss']
// })
// export class UploadFileComponent implements OnInit {

//   selectedFile: File;
//   @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
//   fileUploadForm: FormGroup;
//   fileInputLabel: string;

//   constructor(
//     private http: HttpClient,
//     private formBuilder: FormBuilder,
//     private authService: AuthenticationService
//   ) { }

//   ngOnInit(): void {
//     this.fileUploadForm = this.formBuilder.group({
//       myfile: ['']
//     });
//   }

//   onFileSelect(event) {
//     let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
//     if (event.target.files.length > 0) {
//       const file = event.target.files[0];
//       // console.log(file);
//       this.fileInputLabel = file.name;
//       this.fileUploadForm.get('myfile').setValue(file);

//     }
//   }

//   onFileChanged(event) {
//     this.selectedFile = event.target.files[0]
//   }

//   onUpload() {
//     this.authService.uploadPhoto(this.selectedFile)
//   }

//   onFormSubmit(f: NgForm) {
//     const formData = new FormData();
//     formData.append('formFile', this.fileUploadForm.get('myfile').value);
//     formData.append('agentId', '007');


//     this.http
//       .post<any>('http://localhost:8080/api/updateImage', formData).subscribe(response => {
//         console.log(response);
//         if (response.statusCode === 200) {
//           // Reset the file input
//           this.uploadFileInput.nativeElement.value = "";
//           this.fileInputLabel = undefined;
//         }
//       }, error => {
//         console.log(error);
//       });
//   }
// }