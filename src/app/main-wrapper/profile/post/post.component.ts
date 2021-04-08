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
  userPost: Post[] = [];
  categoriaPost: string;
  constructor(
    private sharedService: SharedService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getUserPost();
  }

  getUserPost() {
    this.userService.getPost().subscribe((result: Post[]) => {
      console.log(result);
      this.userPost = result;
      this.userPost.forEach((element) => {
        let categoriaId = element.categoria;
        this.userService
          .getCategoria(categoriaId)
          .subscribe((result: CategoriaPost) => {
            console.log(result);
          });
      });
    });
  }
}
