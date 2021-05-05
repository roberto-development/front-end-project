import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ExcelDTO } from 'src/app/models/ExcelDTO.model';
import { Post } from 'src/app/models/Post.model';
import { TokenDTO } from 'src/app/models/TokenDTO.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  userPost: Post[] = [];
  categoriaPost: string;

  dumbObj: any;
  excelDTO: ExcelDTO = null;

  excelFile: ExcelDTO = null;

  constructor(private userService: UserService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.getUserPost();
    // this.initDownload();
    // this.initDownloadCSV();
  }

  getUserPost() {
    this.userService.getPost().subscribe((result: Post[]) => {
      console.log(result);
      this.userPost = result;

    });
  }

  async initDownload() {
    this.excelDTO = await this.userService.getResponseEntityExcelDTO();
    console.log(this.excelDTO);

  }

  async initDownloadCSV() {
    const file = await this.userService.getExcelFile();
    console.log(file);
  }




 getExcelRespEntity() {
    // const result = awaitb this.userService.getResponseEntityExcelDTO();
    // console.log(result);
    console.log(this.excelDTO);

    const downloadFile = document.createElement("a");
    // data:application/octet-stream;base64,
    // vnd.ms-excel    | safe:'url'
    downloadFile.href = `data:application/vnd.ms-excel;base64,${this.excelDTO.excelBase64}`;
    downloadFile.download = this.excelDTO.fileName + ".xlsx";
    const transformed = this.transform(downloadFile);
    return transformed;
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

   getExcel() {
    const value = this.userService.getExcel().subscribe((result) => {
      console.log(value);
      console.log(result);
      this.excelFile = result;
    });

  }
}
