import { Component, OnInit } from '@angular/core';
import { CategoriaPost } from 'src/app/models/CategoriaPost.model';
import { Post } from 'src/app/models/Post.model';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: Post[] = [];
  categoriaPost: string;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUserPost();
  }

  getUserPost() {
    this.userService.getPost().subscribe((result: Post[]) => {
      console.log(result);
      this.post = result;
    });
  }
}
