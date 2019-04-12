import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import * as MagicStrings from 'src/app/shared/magic-strings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

 
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  isAuthenticated(){
    return localStorage.getItem(MagicStrings.Token) != null;
  }

  isSuperAdmin(){
    return localStorage.getItem(MagicStrings.IsSuperAdmin) == "1";
  }

  logOut(){
    this.userService.logOut()
    this.router.navigateByUrl('/home');    

  }

}
