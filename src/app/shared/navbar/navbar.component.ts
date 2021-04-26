import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  isExpanded = true;
  value = 'Clear me';

  constructor(
    private router: Router,
    private userService: UserService,
    private sharedService: SharedService) {}

  ngOnInit(): void {}

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  toggleMenu() {
    this.sharedService.subjectShared.next(true);

  }

  logout() {
    this.userService.logout();
  }
}
