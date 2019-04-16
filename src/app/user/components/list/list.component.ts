import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUser } from '../../dto/IUser';
import { UserService } from 'src/app/core/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  dataSource:IUser[];
  sb:Subscription;
  columnsToDisplay = ['firstName', 'lastName', 'username', 'email', '_id'];
  loading:boolean;

  constructor(private userService: UserService) { 
    this.loading = true;
    this.sb = userService.list().subscribe(data=>{
      console.log(data);
      this.dataSource = data;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  deleteRecord(id:string){
     this.loading = true;
     this.sb = this.userService.delete(id).subscribe(data=>{
      this.loading = false;
      
      this.dataSource = this.dataSource.filter(x=> x._id != id);
     },
     err=>this.loading=false);
  }

  ngOnDestroy(): void {
    this.sb.unsubscribe();
  }
}
