import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent {
  constructor(private router:Router){}
onclick():void{
  this.router.navigate(['./userprofile'])
}
}
