import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  userPost: Post[] = [];
  categoriaPost: string;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUserPost();
  }

  getUserPost() {
    this.userService.getPost().subscribe((result: Post[]) => {
      console.log(result);
      this.userPost = result;
    });
  }
}
