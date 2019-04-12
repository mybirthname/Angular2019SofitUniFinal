import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import * as MagicStrings from 'src/app/shared/magic-strings';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }

  logOut(){
    this.userService.logOut()
    this.router.navigateByUrl('/home');    

  }

  isAuthenticated(){
    return localStorage.getItem(MagicStrings.Token) != null;
  }
  
  isSuperAdmin(){
    return localStorage.getItem(MagicStrings.IsSuperAdmin) == "1";
  }
}
