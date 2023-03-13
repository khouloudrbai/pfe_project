import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit  {
   users: any=[];

  constructor(private userService: UserService ,private router:Router) {
  }
  ngOnInit() {
    this.getuser();

  }
  getuser(){ 
    this.userService.get_user().subscribe(respond => {
    this.users = respond.data ;
    console.log(respond);
    console.log(respond.isFailed);
    console.log(respond.code);
  }
    )}


  deleteItem(id:number) {
      this.userService.delete_user(id).subscribe( );
  }
  
    

}

