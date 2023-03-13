import { Component,OnInit,VERSION } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private router:Router){}
  isMenuOpened:Boolean=false;

toggleMenu():void{
  this.isMenuOpened=!this.isMenuOpened;
}
onclick():void{
this.router.navigate(['./profile']);
}
logout():void{
  localStorage.removeItem('currentUser');
  this.router.navigate(['./login'])
}
}