import { Component, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/Post.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  userPost: Post[] = [];

  @Input()
  /**
   * commento visibile
   */
  post: Post;

  // @Output()

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUserPost();
  }
  /**
   * lio
   */

  // async prova() {
  //   // console.log('img profile: ' + res);
  //   const transformed = this.transform();
  //   return transformed;
  // }

  // transform() {
  //   return this.domSanitizer.bypassSecurityTrustHtml(this.user.image);
  // }
  getUserPost() {
    this.userService.getPost().subscribe((result: Post[]) => {
      console.log(result);
      this.userPost = result;
      // this.userPost.forEach((element) => {
      //   let categoriaId = element.categoria;
      //   this.userService
      //     .getCategoria(categoriaId)
      //     .subscribe((result: CategoriaPost) => {
      //       console.log(result);
      //     });
      // });
    });
  }


  // getPostImage() {
  //   return this.userPost.
  // }
}
