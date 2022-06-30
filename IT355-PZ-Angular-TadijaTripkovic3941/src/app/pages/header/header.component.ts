import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User = {};
  constructor(private router: Router, private userService: UserService) { 
    this.user = this.userService.ulogovan;
  }

  logOut(){
    this.userService.ulogovan = {}
    this.user = {}
    this.router.navigate(['/login']);

  }

  ngOnInit(): void {
  }

}
